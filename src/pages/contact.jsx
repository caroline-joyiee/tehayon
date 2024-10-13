import React from 'react'
import { ContacTracing, logoteyahon } from '../assets'
import Layout from '../../components/layout'
import { HiMenu, HiX } from 'react-icons/hi'
import Header from '../../components/header'

const Contact = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // // Function to toggle menu visibility
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>

      <Header/>
    <img src={ContacTracing} alt="Contact Us" />

    <div className=''>
    <div className=" flex justify-center mobile:items-center desktop:flex-row tablet:flex-col laptop:flex-row laptop:p-20 mobile:flex-col gap-8 p-4 tablet:p-20 ">
  <div className="basis-1/3 desktop:laptop:w-[600px] laptop:desktop:h-[350px] mobile:w-full p-20 bg-lime-200 hover:drop-shadow-2xl">
  <h2 class="text-xl font-bold text-center mb-4">Our Location</h2>
 
  <iframe
            src="https://satellites.pro/Google_plan/Volta_map.Ghana" 
            className='w-[500px] h-[300px] mobile:w-64 ml-[-30px]'
            
        ></iframe>
  
  </div>
  <div className="basis-1/3 desktop:laptop:w-[600px] desktop:laptop:h-[350px]  desktop:laptop:p-24 mobile:w-full mobile:h-32 mobile: p-20 mobile:pl-44 bg-lime-600 flex-col text-white hover:drop-shadow-2xl ">
  <div className='w-full h-56  flex justify-evenly'>
        <div className='desktop:text-3xl desktop:ml-3 laptop:text-3xl  mobile:text-2xl font-semibold p-3 ml-[-100px]'>
          Contact Us
        </div>

        <div className=''>
          <a className='text-white  bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel:+233241950590">  +233241950590
          </a>
          <br />

          <a className='text-white  bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel: +233593148000">            +233593148000

          </a>
          
          <br />
          

          <a className='text-white  bg-transparent font-normal hover:bg-lime-600 hover:text-white hover:font-bold p-2 rounded-md' href="tel: +233244046216">            +233244046216

          </a>

          <br />
          <br />
          <br />

          <div className='ml-[-150px] text-xl '>
          <a href='<a href="mailto:tehayonnetwork@gmail.com?subject=Hello%20There&body=This%20is%20a%20test%20email.">Send Email</a>
'>      
              <span className='font-bold hover:text-black transition-all duration-100'>  Mail:</span>tehayonnetwork@gmail.com
          </a>
        </div>

        </div>

       

      </div>


  
  </div>
  <div className="laptop:basis-1/3 desktop:laptop:w-[600px] desktop:laptop:h-[350px] bg-white mobile:p-20 mobile:pl-44 mobile:w-full flex-col  hover:drop-shadow-2xl ">
  
  <img className='w-16 items-center pl-4 ml-2' src={logoteyahon} alt="Logo" />
  <br />
  <span className='text-xl desktop:laptop:items-start mobile:tablet:items-center'>
  <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
      <a href="http://localhost:5173/gallery">Gallery</a>
    </span>
    <br />
    <br />
    
    <span className='text-black p-5 cursor-pointer hover:border-b-4 border-lime-600 transition-all'>
      <a href="http://localhost:5173/about">About</a>
    </span>
  </span>
  <br />
<br />
<br />
  
  <button className='bg-lime-600 p-2  text-white pl-5 pr-5 ml-5 items-center hover:bg-lime-700 hover:font-bold hover:rounded-lg'>
   <a href='http://localhost:5173/'>Widget</a>
    
  </button>
  
  </div>
</div>
    </div>

    </div>
  )
}

export default Contact