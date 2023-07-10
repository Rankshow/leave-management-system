import React from 'react';
import { Table, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlusCircleOutlined } from '@ant-design/icons';
import {CloseCircleOutlined} from '@ant-design/icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  
  return(
    <>
    <div className='mt-[5em] flex items-center justify-between m-3'>
       <h3 className='text-xl font-medium text-red-400'>Department</h3>
        <button className='text-green-800 font-bold'><PlusCircleOutlined /></button>
    </div>
    <div className='flex justify-center '>
      <table className="table-auto w-screen">
      <thead className="bg-blue-700 border-separate border-spacing-2 b text-white ">
        <tr>
          <th className='border border-spacing-1 py-2'>Name</th>
          <th className='border border-spacing-1 py-2'>Procurement</th>
          <th className='border border-spacing-1 py-2'>Accounting</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-gray-300'>
          <td>The Sliding Mr. Bones </td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr className='bg-gray-300'>
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