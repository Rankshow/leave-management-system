import React from "react";
import {CloseCircleOutlined} from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import {EyeOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {doc, deleteDoc} from "firebase/firestore"

const Table = ({employees, setEmployees }) => {
  // const id = selectEmployee.id

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        // TODO delete document
        deleteDoc(doc(db, "employee", id))

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee} ${employee}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        setEmployees(employeesCopy);
      }
    });
  };

      return(
        <>
          <tbody className='py-2'>
              {
                 employees && employees.map((data, i) => {
                  return (
                  <tr key={data.id} className='bg-gray-300 text-center'>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNo}</td>
                    <td>{data.leaveType}</td>
                    <td><button onClick={() => handleDelete(employees.id)} className='text-red-600 font-bold text-2xl pb-1 hover:opacity-[.7]'><CloseCircleOutlined /></button>
                  <Link to="/editItems"><button className='text-green-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EditOutlined /></button></Link> 
                    <button className='text-orange-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EyeOutlined /></button>
                    </td>  
                  </tr>
                  )
                })
              }
          </tbody>
        </>
      )
}
export default Table;