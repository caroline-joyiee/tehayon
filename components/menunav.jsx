// import React, { useState } from 'react'
// import { HiMenu, HiX } from 'react-icons/hi';

// const Llinks = () => {
//     return(
//         <div className='mobile:flex mobile:flex-col laptop:flex-row laptop:'>
//     <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
//       <a href="http://localhost:5173/home">Home</a>
//     </span>
//     <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
//       <a href="http://localhost:5173/about">About</a>
//     </span>
//     <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
//       <a href="http://localhost:5173/gallery">Gallery</a>
//     </span>
//     <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
//       <a href="http://localhost:5173/contact">Contact</a>
//     </span>
//   </div>
//     )

// };


// const Menunav = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     // Function to toggle menu visibility
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };
//   return (
//     <div className='w-1/3 flex justify-around mobile:flex mobile:flex-col  '>


//         <div className={`laptop:hidden desktop:hidden ${isOpen ? 'flex' : 'hidden'}  laptop:hidden transition-all`}>
//         <Llinks/>
//         </div>
//         <div className='laptop:hidden mobile:flex-col cursor-pointer'>
//         <button onClick={toggleMenu}> 
//         {isOpen ? <HiX/>  : <HiMenu/>}
//         </button>
//         </div>
        
//     </div>
//   )
// }

// export default Menunav

import React, { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi';

const Llinks = () => {
  return (
    <div className='flex flex-col laptop:flex-row desktop:flex-row'>
      <span className='text-black p-5 cursor-pointer hover:border-b-4 hover:font-bold border-lime-600 transition-all'>
        <a href="http://localhost:5173/home">Home</a>
      </span>
      <span className='text-black p-5 cursor-pointer hover:border-b-4 hover:font-bold border-lime-600 transition-all'>
        <a href="http://localhost:5173/about">About</a>
      </span>
      <span className='text-black p-5 cursor-pointer hover:border-b-4 hover:font-bold border-lime-600 transition-all'>
        <a href="http://localhost:5173/gallery">Gallery</a>
      </span>
      <span className='text-black p-5 cursor-pointer hover:border-b-4 hover:font-bold border-lime-600 transition-all'>
        <a href="http://localhost:5173/contact">Contact</a>
      </span>
    </div>
  );
};

const Menunav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex justify-evenly p-5'>
      {/* Desktop/Laptop View: Always visible */}
      <div className='mobile:hidden w-full laptop:flex desktop:flex '>
        <Llinks />
      </div>

      {/* Mobile View: Toggle visibility */}
      <div className={`mobile:flex flex-col ${isOpen ? 'flex' : 'hidden'}`}>
        <Llinks />
      </div>

      {/* Menu Toggle Button for Mobile */}
      <div className='laptop:hidden desktop:hidden cursor-pointer'>
        <button className='desktop:hidden laptop:hidden mobile:block' onClick={toggleMenu}>
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>
    </div>
  );
};

export default Menunav;
