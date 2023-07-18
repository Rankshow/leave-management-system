import React,{ useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { db } from "../Component/config/firebase";
import { employeesData } from '../data/data';
import { collection, getDocs} from 'firebase/firestore';

import Table from './Table';
import AddItem from './AddItem';
import EditItem from './EditItems';



const Home = ({handleDelete, newEmployee, getEmployees}) => {
   const [employees, setEmployees] = useState(newEmployee);
   console.log(employees);
   const [selectedEmployee, setSelectEmployee] = useState(null);
   const [isAdding, setIsAdding] = useState(false);
   const [isEditing, setIsEditing] = useState(false)
    
  
  return(
    <>
    <div className='max-w-2xl mx-auto mt-[5em] flex items-center justify-between mb-3'>
       <h3 className='text-2xl font-medium text-red-400'>Employees</h3>
       <Link to="/addItem"><button onClick={() => setIsAdding(true)} className='text-green-700 rounded-md text-2xl tracking-wider hover:opacity-[.7]'><PlusCircleOutlined /></button></Link> 
    </div>
    <div className='flex justify-center max-w-4xl mx-auto'>
      <table className="table-auto w-screen">
      <thead className="bg-blue-700 border-separate border-spacing-2 b text-white cursor-pointer ">
        <tr>
          <th className='border border-spacing-1 py-2'>id</th>
          <th className='border border-spacing-1 py-2'>Name</th>
          <th className='border border-spacing-1 py-2'>Email</th>
          <th className='border border-spacing-1 py-2'>Phone No</th>
          <th className='border border-spacing-1 py-2'>Leave Type</th>
          <th className='border border-spacing-1 py-2'>Action</th>
        </tr>
      </thead>
       { !isAdding && !isEditing &&(
        <Table 
         employees={employees}
        
         handleDelete={handleDelete}
        />
        )}{ isAdding &&(
          <AddItem 
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          getEmployees={getEmployees}
          />
        )
        } {isEditing && (
          <EditItem
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        )}
    </table>
    </div>
  </>
  )
}

export default Home;