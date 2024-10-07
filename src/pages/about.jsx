import React, { useState } from 'react'
import { cassavafarm, fruitimg, img123, img24, img678, logoteyahon, previewHero } from '../assets'
import Layout from '../../components/layout';
import Header from '../../components/header';

const About = () => {

  
 

  return (
    <div className='relative'>

    
      <Header/>

      <div className=' '>
      <img className='desktop:h-[700px] laptop:h-[700px] mobile:h-80 tablet:h-96 w-full' src={fruitimg} alt="Cheif planting" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='text-center'>
        <span className='desktop:laptop:text-6xl font-bold mobile:text-4xl '>Tehayon and Breadfruit </span>
        <br />
        <span className='text-3xl mobile:text-2xl'>Company Ltd Ghana </span>
      </div>
      <br />
      <br />

      <div className='flex justify-evenly  desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20'>
        <span className='border-l-8 border-lime-600 tablet:w-[650px] laptop:w-[500px] p-8 text-left'>Tehayon and Breadfruit Company is 
the subsidiary of Tehayon Foundation, 
which has been has been in existence 
for the past 20 years. Initially it has started 
as a non profit organisation for community 
mobilisation towards environmental  
sustainability programs as the initiative to 
reduce the effects of climate change.</span>

    <img className=' tablet:w-[800px] laptop:w-[400px] ' src={img678} alt="farm" />
      </div>

      <br />
      <br />
      <br />

      <div className='flex justify-evenly desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20 '>
        <span className='border-l-8 border-lime-600 tablet:w-[650px] laptop:w-[500px] p-8 text-left'>Activities such as trees planting sensitization program on environmental
           sustainability where therefore undertaken nationwide.  In spite of all successes chalked in this area, the management of the organisation realises there is the need to  financially empower the community members through income generating activities so,in order not to deviate from the core mandate of the organisation, </span>

<span className='border-l-8 border-lime-600 tablet:w-[650px] laptop:w-[500px] p-8 text-left'>the organisation therefore decided to promote the cultivating of trees planting  that have the economic benefits to the people which which will at the same time protect the environment
Currently, Tehayon and Breadfruit  Company Ghana Ltd is working in the Volta  and Oti Regions in Ghana. The organisation has over 5000 acres of land for cultivating  Cassava and Breadfruit , starting with  
Cassava farming and Breadfruit soon as funds  are available.</span>

      </div>

      <div>
        <div className='laptop:desktop:text-5xl font-bold p-16 ml-28 tablet:ml-16 mobile:ml-[-50px] mobile:text-3xl '>Objectives</div>
        <div className='flex justify-evenly desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20 '>

        <img className='tablet:w-[800px] laptop:w-[400px]' src={img123} alt="farm" />

        <span className='border-l-8 border-lime-600 tablet:w-[650px] laptop:w-[500px] p-8 text-left'>

          <span className='font-bold'>Tehayon and Breadfruit Company Ltd Ghana has identified several Objectives for the business </span>
          <br />
          
          1. Become the leading supplier of Breadfruit and cassava products to the international markets. 
          <br />
          <br />

2. Reach the point of sustainable  profitability. 
<br />
<br />
3. Create sustainable employment and financial security for farmers in Africa. 
        </span>

    
      </div>

      </div>

      <div className='laptop:desktop:text-5xl font-bold p-16 ml-28 tablet:ml-[100px] mobile:ml-[-50px] mobile:text-3xl'> Product And  Key To Success</div>
      
      <div className='flex justify-evenly desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20'>


        <span className='border-l-8 border-lime-600 tablet:w-[650px] laptop:w-[500px] p-8 text-left'>

          <br />

          <span className='font-bold'>
            
            
            Tehayon and Breadfruit Company Ltd Ghana has identified three major keys that will be instrumental in their  success. </span>
          <br />
          
          1. Adherence to strict financial control which  will be in line with the 2024 COSO  Model. 
          <br />
          <br />

          2. Secondly, the continous pursuit for  maintaining high standard in addressing production 
          issues with best organisational 
          practices in order of meet the standards of all  markets regulator. 
<br />
<br />
3.The recognition and implementation of the philosophy that generates 100%customers 
satisfaction to ensure the company remains profitable with the 
highest profit margins as much as possible. 
        </span>

        <img className='tablet:w-[860px] laptop:w-[400px]' src={img24} alt="farm" />


    
      </div>

      <div className='w-full h-56 p-20 flex justify-evenly'>
        <div className='laptop:text-5xl desktop:5xl font-semibold p-3 mobile:text-2xl'>
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

export default About

