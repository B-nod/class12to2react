import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/user/Card'

const Productpages = () => {
  const[product, setProduct] = useState([])
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products`)
  .then(res=>setProduct(res.data))
  .catch(err=>console.log(err))
}, [])
  return (
    <>
    <div className="flex flex-wrap justify-evenly py-10 gap-6 px-20">
     {
      product.map((data, key)=>(
        <Card data={data}/>
      ))
     }
      </div>
   
    </>
  )
}

export default Productpages
