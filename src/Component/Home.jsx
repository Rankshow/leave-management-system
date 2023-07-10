import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import { Table, Container, Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {CloseCircleOutlined} from '@ant-design/icons';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


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
          <th className='border border-spacing-1 py-2'>Accounting</th>
        </tr>
      </thead>
      <tbody className='py-2'>
        <tr className='bg-gray-300 text-center'>
          <td>The Sliding Mr. Bones </td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr className='text-center'>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr className='bg-gray-300 text-center'>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
    </div>
  </>
  )
}

export default Home;