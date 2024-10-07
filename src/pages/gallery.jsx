import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import slides, { img097, img10, logoteyahon } from '../assets'
import Layout from '../../components/layout'
import Header from '../../components/header'


const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }



  return (

    <div>
      <Header/>

      <img className='w-full desktop:h-[700px] laptop:h-[700px] mobile:h-[260px]' src={img10} alt="Gallery" />
      <br />

      <div className='max-w-md mx-auto text-center'>
        <span className='mobile:text-3xl desktop:text-5xl laptop:text-4xl font-bold '>Tehayon Group</span>
        <br />
        <span className='mobile:text-lg desktop:text-2xl laptop:text-2xl '>Of Companies </span>
      </div>
      <br />

      <div className='text-center max-w-md mx-auto'>
        <span className='font-bold mobile:text-sm desktop:text-xl laptop:text-xl'>Welcome to our tree-planting gallery! </span>
        <br />
        <br />
        Each photograph captures the essence of our mission: to restore ecosystems, combat climate
        change, and creating ready market for the farmers
      </div>

      <div className='max-w-[800px] h-[500px] w-full m-auto py-14 px-4 relative group'>

        <div style={{ backgroundImage: `url(${slides()[currentIndex].image})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

        </div>

        {/* arrow left */}

        <div className='hidden group-hover:block absolute top-[50%] - translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>

          <BsChevronCompactLeft onClick={prevSlide} size={30} />

        </div>


        {/* arrow right */}
        <div className='hidden group-hover:block absolute top-[50%] - translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />

        </div>

        <div className='flex top-4 justify-center py-2'>
          {slides && slides.length > 0 ? (
            slides.map((slide, slideIndex) => (
              <div key={slideIndex}>
                {/* Example usage */}
                <img src={slide.image} alt={`Slide ${slideIndex}`} />
              </div>
            ))
          ) : (
            <p></p>
          )}

        </div>

      </div>



      

      <div className='w-full h-56 p-20 flex justify-evenly'>
        <div className='laptop:text-5xl font-semibold p-3 mobile:text-2xl'>
          Contact Us
        </div>

        <div className=''>
          <a className='text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel:+233241950590">  +233241950590
          </a>
          <br />

          <a className='text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel: +233593148000">            +233593148000

          </a>
          
          <br />
          

          <a className='text-black bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel: +233244046216">            +233244046216

          </a>
        </div>

      </div>

      <div className='w-full h-20 bg-lime-600 pt-10 flex justify-evenly '>



        <div className=''>
          <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/gallery">Gallery</a></span>
          <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/contact">Contact</a></span>
          <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/contact">Mail</a></span>
          <span className='text-white p-5 cursor-pointer hover:border-b-4 border-white transition-all'> <a href="http://localhost:5173/about"> Service</a></span>

        </div>


      </div>
      <div className='text-white w-full h-20 bg-lime-600 p-5 text-center'> <br />This is @Copyright 2024</div>
    </div>
  )
}

export default Gallery