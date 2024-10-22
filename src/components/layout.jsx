import React, { useState } from 'react'
import { logoteyahon } from '../src/assets';
import { HiMenu, HiX} from 'react-icons/hi'

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div><div className="flex ">
    <div className="flex-none w-14 h-3 bg-white ">
     
    </div>
    <div className="grow h-3 bg-lime-600">
     
    </div>
    <div className="flex-none w-14 h-3 bg-white">
     
    </div>
  </div>
  <div className='w-full laptop:h-28 bg-white pt-10 laptop:flex laptop:justify-around desktop:justify-evenly laptop:p-5 desktop:p-5 tablet:flex justify-evenly mobile:flex mobile:justify-around mobile:p-4'>
  
  <div className='laptop:flex laptop:justify-around desktop:justify-evenly laptop:p-5 '>
    <div className='w-16 h-16'>
      <img src={logoteyahon} alt="Logo" />
    </div>

    {/* Toggle Menu/Close Icon */}
    <div className='p-5 laptop:hidden desktop:hidden '>
      {isOpen ? (
        <HiX size={32} className='cursor-pointer' onClick={toggleMenu} />
      ) : (
        <HiMenu size={32} className='cursor-pointer' onClick={toggleMenu} />
      )}
    </div>
  </div>

  <div className={`laptop:flex desktop:flex ${isOpen ? 'flex' : 'hidden'} mobile:flex-col laptop:flex-row mobile:m-4`}>
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

      <main>
        {children} {/* Render page-specific content here */}
      </main>
    </div>
      
  )
}

export default Layout