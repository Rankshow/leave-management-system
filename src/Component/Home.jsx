import React,{ useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {CloseCircleOutlined} from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import {EyeOutlined} from '@ant-design/icons';



const Home = () => {
  
  return(
    <>
    <div className='max-w-2xl mx-auto mt-[5em] flex items-center justify-between mb-3'>
       <h3 className='text-2xl font-medium text-red-400'>Department</h3>
       <Link to="/addItem"><button className='text-green-700 rounded-md text-2xl tracking-wider hover:opacity-[.7]'><PlusCircleOutlined /></button></Link> 
    </div>
    <div className='flex justify-center max-w-4xl mx-auto'>
      <table className="table-auto w-screen">
      <thead className="bg-blue-700 border-separate border-spacing-2 b text-white cursor-pointer ">
        <tr>
          <th className='border border-spacing-1 py-2'>Name</th>
          <th className='border border-spacing-1 py-2'>Procurement</th>
          <th className='border border-spacing-1 py-2'>Payment</th>
          <th className='border border-spacing-1 py-2'>Action</th>
        </tr>
      </thead>
      <tbody className='py-2'>


        <tr className='bg-gray-300 text-center'>
          <td>Mr. Bones </td>
          <td>laptops</td>
          <td>#130,000</td>
          <td><button className='text-red-600 font-bold text-2xl pb-1 hover:opacity-[.7]'><CloseCircleOutlined /></button>
         <Link to="/addItem"><button className='text-green-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EditOutlined /></button></Link> 
          <button className='text-orange-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EyeOutlined /></button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Mrs belly</td>
          <td>24" flat Tv</td>
          <td>#50,000</td>
          <td><button className='text-red-600 font-bold text-2xl pb-2 hover:opacity-[.7]'><CloseCircleOutlined /></button>
          <Link to="/addItem"><button className='text-green-600 font-bold text-2xl pb-2 md:ml-3  hover:opacity-[.7]'><EditOutlined /></button></Link> 
          <button className='text-orange-600 font-bold text-2xl pb-2 md:ml-3  hover:opacity-[.7]'><EyeOutlined /></button></td>
        </tr>
        <tr className='bg-gray-300 text-center'>
          <td>Mr maculone</td>
          <td>webcam</td>
          <td>#25,000</td>
          <td><button className='text-red-600 font-bold text-2xl pb-1 hover:opacity-[.7]'><CloseCircleOutlined /></button>
          <Link to="/addItem"><button className='text-green-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EditOutlined /></button></Link> 
          <button className='text-orange-600 font-bold text-2xl pb-2 md:ml-3  hover:opacity-[.7]'><EyeOutlined /></button></td>
        </tr>
      </tbody>
    </table>
    </div>
  </>
  )
}

export default Home;