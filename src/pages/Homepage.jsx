import React from 'react'
import Carousel from '../components/user/Carousel'
import Card from '../components/user/Card'

const Homepage = () => {
  const card = [
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },
    {
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/laptop2.jpg',
      "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto harum obcaecati. Veniam voluptatem id, perferendis aliquid explicabo unde."
    },

  ]
  return (
    <>
    <Carousel/>
    <div className="flex flex-wrap justify-evenly py-10 gap-6 px-20">
    {
      card.map((data)=>(
      
      
            <Card data={data}/>
      
        
      ))
    }
      </div>
   
    </>
  )
}

export default Homepage