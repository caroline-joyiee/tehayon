import React from 'react'

const Toggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    
      // Function to toggle menu visibility
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div>
         <div className='p-5 mobile:inli laptop:hidden desktop:hidden '>
      {isOpen ? (
        <HiX size={32} className='cursor-pointer' onClick={toggleMenu} />
      ) : (
        <HiMenu size={32} className='cursor-pointer' onClick={toggleMenu} />
      )}
    </div>
  
    </div>
  )
}

export default Toggle