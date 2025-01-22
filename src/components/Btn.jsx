import React from 'react'

const Btn = (data) => {
  return (
    <>
    <button className='px-3 py-2 bg-blue-400 text-white'>{data.data_content}</button>
    </>
  )
}

export default Btn