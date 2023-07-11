import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Navbar
  return (
    <div>
      <nav>
        <ul className='flex items-center pl-4 justify-between bg-black '>
         <h1 className='md:text-3xl text-red-600 font-bold md:py-5 py-5'>Leave Management System</h1>
          <div className='flex cursor-pointer text-white md:mr-4 mr-2'>
          <Link to="/"><li className='mr-3 font-medium hover:opacity-[.7]'>Home</li></Link> 
           <Link to="/about"><li className=' font-medium hover:opacity-[.7]'>About</li></Link> 
            </div> 
        </ul>
      </nav>
    </div>
  )
}

export default Header;