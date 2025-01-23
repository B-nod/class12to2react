import React, { useEffect, useState } from 'react'

const Cartpage = () => {
    const[cart,setCart]=useState([])
    useEffect(()=>{
     const cartItem = JSON.parse(localStorage.getItem('cart'))
     setCart(cartItem)
    })

    console.log(cart)
  return (
    <></>
  )
}

export default Cartpage