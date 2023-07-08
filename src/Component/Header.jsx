import React from 'react'

const Header = () => {
  // Navbar
  return (
    <div>
      <nav>
        <ul className='flex items-center pl-4 justify-between bg-black '>
         <h1 className='text-xl md:text-3xl text-red-600 font-bold md:py-5 py-5'>Leave Management System</h1>
          <div className='flex cursor-pointer text-white md:mr-4 mr-2'>
            <li className='mr-3 font-medium hover:opacity-[.7]'>Home</li>
            <li className=' font-medium hover:opacity-[.7]'>About</li>
            </div> 
        </ul>
      </nav>
    </div>
  )
}

export default Header;