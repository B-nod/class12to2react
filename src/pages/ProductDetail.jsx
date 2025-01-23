import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = () => {
   
    const[product,setProduct]=useState({})
    const param = useParams()
    const id = param.productId
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))

    }, [id])

   const addtocart = () => {
    const cartItem = JSON.parse(localStorage.getItem('cart')) || []
    const productItem = {
        id:product.id,
        title:product.title,
        description:product.description,
        price:product.price, 
        image:product.image,
        quantity:1
    }
    console.log(cartItem)

    const existingItem = cartItem.find((item)=>item.id === product.id)
    if(existingItem){
        toast.error('Product already in cart')  
    }
    else{
        cartItem.push(productItem)
        localStorage.setItem('cart', JSON.stringify(cartItem))
        toast.success('Product added to cart')
    }
   
   }
  return (
    <>
    <ToastContainer theme='colored' position='top-right' />  
    <section className="productdetail px-10 py-5">
        <h1 className='text-3xl font-bold'>Product Detail</h1>
        <div className="flex flex-wrap justify-between items-center my-8">
            <div className="w-[40%] h-[400px] rounded-lg shadow-md shadow-cyan-900 hover:-translate-y-3 duration-500">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="w-[40%] h-[400px] bg-cyan-50 px-4 py-2 text-gray-700 shadow-md shadow-cyan-900 rounded-lgz">
                <h1 className='mb-2'> <span className='font-bold'>Product Name : </span> {product.title} </h1>
                <p className='mb-2'><span className='font-bold'>Category : </span>{product.category} </p>
                <p className='mb-2'> <span className='font-bold'>Price : </span>{product.price} </p>
                <p className='font-bold'>Description</p>
                <p className='mb-5'>{product.description} </p>
                
              <Link to="">
              <button className="px-3 py-2 bg-blue-500 text-white  hover:-translate-y-3 duration-500 rounded-lg" onClick={addtocart}>add to cart</button>
              </Link>                
                
            </div>
        </div>
    </section>
  

    </>
  )
}

export default ProductDetail