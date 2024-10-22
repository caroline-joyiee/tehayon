import React from 'react'
import Logo from './logo'
import Menunav from './menunav'
import Laptopnav from './laptopnav'
import GreenLine from './greenLine'


const Header = () => {
  return (
    <div className='flex justify-around'>
            {/* <GreenLine/> */}


    <div className='w-full laptop:h-28 bg-white p-5 flex justify-evenly  '>
        <Logo/>

        <div>
        <Menunav/>
        </div>
        
        
        
        
        </div>
        </div>
  )
}

export default Header