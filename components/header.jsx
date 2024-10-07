import React from 'react'
import Logo from './logo'
import Headerline from './headerline'
import Menunav from './menunav'
import Laptopnav from './laptopnav'


const Header = () => {
  return (
    <div className=''>
                <Headerline/>

    <div className='w-full laptop:h-28 bg-white pt-5 p-5 flex justify-around  '>
        <Logo/>

        <div>
        <Menunav/>
        </div>
        
        
        
        
        </div>
        </div>
  )
}

export default Header