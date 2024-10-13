// import React, { useState } from 'react'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
// import { RxDotFilled } from 'react-icons/rx'
// import slides, { img097, img10, logoteyahon } from '../assets'
// import Header from '../../components/header'
// import Sliders from '../../components/sliders'
// const Gallery = () => {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   }

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex)
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   }



//   return (

//     <div>
//       <Header/>

//       <img className='w-full desktop:h-[700px] laptop:h-[700px] mobile:h-[260px]' src={img10} alt="Gallery" />
//       <br />

//       <div className='max-w-md mx-auto text-center'>
//         <span className='mobile:text-3xl desktop:text-5xl laptop:text-4xl font-bold '>Tehayon Group</span>
//         <br />
//         <span className='mobile:text-lg desktop:text-2xl laptop:text-2xl '>Of Companies </span>
//       </div>
//       <br />

//       <div className='text-center max-w-md mx-auto'>
//         <span className='font-bold mobile:text-sm desktop:text-xl laptop:text-xl'>Welcome to our tree-planting gallery! </span>
//         <br />
//         <br />
//         Each photograph captures the essence of our mission: to restore ecosystems, combat climate
//         change, and creating ready market for the farmers
//       </div>

//       <div className='max-w-[800px] h-[500px] w-full m-auto py-14 px-4 relative group'>

//         <div style={{ backgroundImage: `url(${slides()[currentIndex].image})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

//         </div>

//         {/* arrow left */}

//         <div className='hidden group-hover:block absolute top-[50%] - translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>

//           <BsChevronCompactLeft onClick={prevSlide} size={30} />

//         </div>


//         {/* arrow right */}
//         <div className='hidden group-hover:block absolute top-[50%] - translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//           <BsChevronCompactRight onClick={nextSlide} size={30} />

//         </div>

//         <div className='flex top-4 justify-center py-2'>
//           {slides && slides.length > 0 ? (
//             slides.map((slide, slideIndex) => (
//               <div key={slideIndex}>
//                 {/* Example usage */}
//                 <img src={slide.image} alt={`Slide ${slideIndex}`} />
//               </div>
//             ))
//           ) : (
//             <p></p>
//           )}

//         </div>

//       </div>



//           {/* <Sliders/> */}

//           <div class="snap-x snap-mandatory overflow-x-auto flex flex-row-reverse">
//   <div class="snap-center">
//     <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//   </div>
//   <div class="snap-center">
//     <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//   </div>
//   <div class="snap-center">
//     <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//   </div>
//   <div class="snap-center">
//     <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//   </div>
//   <div class="snap-center">
//     <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//   </div>
//   <div class="snap-center">
//     <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//   </div>
// </div>



//       <div className='w-full h-56 p-20 flex justify-evenly'>
//         <div className='laptop:text-5xl font-semibold p-3 mobile:text-2xl'>
//           Contact Us
//         </div>

//         <div className=''>
//           <a className='text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel:+233241950590">  +233241950590
//           </a>
//           <br />

//           <a className='text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel: +233593148000">            +233593148000

//           </a>
          
//           <br />
          

//           <a className='text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel: +233244046216">            +233244046216

//           </a>
//         </div>

//       </div>

//       <div className='w-full h-20 bg-lime-600 pt-10 flex justify-evenly '>



//         <div className=''>
//           <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/gallery">Gallery</a></span>
//           <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/contact">Contact</a></span>
//           <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/contact">Mail</a></span>
//           <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/about"> Service</a></span>

//         </div>


//       </div>
//       <div className='text-white w-full h-20 bg-lime-600 p-5 text-center'> <br />This is @Copyright 2024</div>
//     </div>
//   )
// }

// export default Gallery


import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import slides, { img09, img097, img10, img123, img24, img6, img65, img65p, img678 } from '../assets';
import Header from '../../components/header';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const slidesData = slides();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const slidesData = slides();
    const isLastSlide = currentIndex === slidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-scrolling effect for the gallery
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-x-auto');
    scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Start from the right

    const scrollInterval = setInterval(() => {
      scrollContainer.scrollLeft -= 2; // Adjust the value to change the scroll speed
    }, 20); // Controls scroll speed

    // Cleanup interval on unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      <Header />

      <img className="w-full desktop:h-[700px] laptop:h-[700px] tablet:h-[400px] mobile:h-[260px]" src={img10} alt="Gallery" />
      <br />

      <div className="max-w-md mx-auto text-center">
        <span className="mobile:text-3xl desktop:text-5xl laptop:text-4xl font-bold">Tehayon Group</span>
        <br />
        <span className="mobile:text-lg desktop:text-2xl laptop:text-2xl">Of Companies</span>
      </div>
      <br />

      <div className="text-center max-w-md mx-auto">
        <span className="font-bold mobile:text-sm desktop:text-xl laptop:text-xl">
          Welcome to our tree-planting gallery!
        </span>
        <br />
        <br />
        Each photograph captures the essence of our mission: to restore ecosystems, combat climate
        change, and creating ready market for the farmers
      </div>

      <div className="max-w-[800px] h-[500px] w-full m-auto py-14 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides()[currentIndex].image})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* Arrow left */}
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Arrow right */}
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Thumbnail section */}
        <div className="flex top-4 justify-center py-2">
          {slides &&
            slides.length > 0 &&
            slides.map((slide, slideIndex) => (
              <div key={slideIndex}>
                <img src={slide.image} alt={`Slide ${slideIndex}`} />
              </div>
            ))}
        </div>
      </div>

      {/* Horizontal image gallery with auto-scroll */}
      {/* <div className="snap-x snap-mandatory overflow-x-auto flex flex-row-reverse scrollbar bg-black scrollbar-track-gray-200 animation-marquee ">
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div class="snap-center">
    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center">
    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center">
    <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center">
    <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
      </div> */}

<div className='bg-slate-300 mobile:hidden'>
<marquee behavior="scroll" direction="left">
   <div className="snap-x snap-mandatory gap-5 mobile:hidden overflow-x-auto flex flex-row-reverse scrollbar scrollbar-track-gray-200 animation-marquee ">
        <div className="snap-center rounded-xl   ">
          <img src={img097} alt="" />
        </div>
        <div className="snap-center rounded-xl  hover:">
          <img src={img09} alt="" />
        </div>
        <div class="snap-center rounded-xl  hover:">
          <img src={img10} alt="" />
  </div>
  <div class="snap-center rounded-xl  hover:">
    <img src={img65p} alt="" />
  </div>
  <div className="snap-center rounded-xl  hover:">
          <img src={img678} alt="" />
        </div>
        <div className="snap-center">
          <img src={img123} alt="" />
        </div>
        <div class="snap-center rounded-xl  hover:">
          <img src={img6} alt="" />
  </div>
  <div class="snap-center rounded-xl   hover:">
    <img src={img65} alt="" />
  </div>

 
       
  </div>
</marquee> 
</div>

      {/* Contact Section */}
      <div className="w-full h-56 p-20 flex justify-evenly">
        <div className="laptop:text-5xl font-semibold p-3 mobile:text-2xl">Contact Us</div>

        <div>
          <a className="text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md" href="tel:+233241950590">
            +233241950590
          </a>
          <br />
          <a className="text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md" href="tel:+233593148000">
            +233593148000
          </a>
          <br />
          <a className="text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md" href="tel:+233244046216">
            +233244046216
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-20 bg-lime-600 pt-10 flex justify-evenly">
        <div>
          <span className="text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all">
            <a href="http://localhost:5173/gallery">Gallery</a>
          </span>
          <span className="text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all">
            <a href="http://localhost:5173/contact">Contact</a>
          </span>
          <span className="text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all">
            <a href="http://localhost:5173/contact">Mail</a>
          </span>
          <span className="text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all">
            <a href="http://localhost:5173/about">Service</a>
          </span>
        </div>
      </div>

      <div className="text-white w-full h-20 bg-lime-600 p-5 text-center">
        <br />
        This is @Copyright 2024
      </div>
    </div>
  );
};

export default Gallery;
