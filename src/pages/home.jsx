import React, { useState } from 'react'
import { beardFriut, cassava, logoteyahon, plants } from '../assets'
import Layout from '../../components/layout.jsx'
import Header from '../../components/header.jsx'



const Home = () => {

  
  

  return (
<div className='relative'>

    <Header/>

    <div className="relative">
  {/* Hero Image */}
  <img src={plants} alt="Heroimage" className="w-full h-auto" />

  <br />

  {/* Hero Text Wrapper */}
  <div className=" text-center">
    <span className="block text-black font-bold mobile:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-5xl">
      Tehayon Group
    </span>
    <span className="block text-black font-semibold mt-2 mobile:text-sm tablet:text-xl laptop:text-2xl desktop:text-2xl">
      Of Companies
    </span>
    <span className="block text-black font-normal mt-4 mobile:hidden tablet:block tablet:text-sm laptop:text-sm desktop:text-lg">
      The Neatness Of Environment, Our Priority
    </span>
  </div>
 </div>






        <div className='flex justify-evenly  desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20'>
          <div className='tablet:w-[650px] laptop:w-[500px] p-8 text-left'>
            <span className='text-2xl text-left font-medium'>MISSION</span>
            <br />
            <br />
            <span className=''>To create sustainable employment 
              for Breadfruit farmers and Cassava 
              farmers and ready markets. 
              Products through the provision of 
              technical and financial support 
              for a brighter future. </span>
          </div>

          <div className=''>
            <img className= 'tablet:w-[800px] laptop:w-[400px] rounded-tl-2xl  rounded-br-2xl'src= { beardFriut } alt="Friut Plant" />
          </div>
        </div>
      

          <div className='flex justify-evenly bg-lime-600 text-white desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20'>

          <div className=''>
            <img className='tablet:w-[800px] laptop:w-[400px] rounded-tl-2xl rounded-br-2xl' src={cassava} alt="" />
          </div>
          <div className='tablet:w-[650px] laptop:w-[500px] p-8 text-left'>
            <span className='text-2xl text-left font-medium'>VISION</span>
            <br />
            <br />
            <span>
            The vision of Tehayon and Breadfruit Company Ltd Ghana is to contribute to the sustainable development of African economies by building market-leading businesses 
            through a focused approach and continuous enhancement of shareholders’ value
            </span>
          </div>

          </div>

          <div className='w-full h-56 p-20 flex justify-evenly'>
        <div className='desktop:text-5xl laptop:text-5xl mobile:text-2xl font-semibold p-3'>
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

export default Home