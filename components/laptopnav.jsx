import React from 'react'

const Laptopnav = () => {
  return (
    <div>
         <div className=' flex p-5 mobile:hidden laptop:block'>
    <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
      <a href="http://localhost:5173/home">Home</a>
    </span>
    <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
      <a href="http://localhost:5173/about">About</a>
    </span>
    <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
      <a href="http://localhost:5173/gallery">Gallery</a>
    </span>
    <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
      <a href="http://localhost:5173/contact">Contact</a>
    </span>
  </div>
    </div>
  )
}

export default Laptopnav