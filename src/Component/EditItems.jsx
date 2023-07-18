import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db} from "../Component/config/firebase"
import { collection, getDocs } from "firebase/firestore";
// import { toast } from 'react-toastify';


const EditItem = ({employees, setEmployees, selectEmployee, setIsEditing}) => {
  const id = selectEmployee.id
  // all states of all input.
  const [name, setName] = useState(selectEmployee.name);
  const [email, setEmail] = useState(selectEmployee.email);
  const [phoneNo, setPhoneNo] = useState(selectEmployee.phoneNo);
  const [leaveType, setLeaveType] = useState(selectEmployee.leaveType);
  
  
  const handleUpdate = async e => {
    e.preventDefault();

    if (!name || !phoneNo || !email || !leaveType) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      id,
      name,
      email,
      phoneNo,
      leaveType,
    };

    employees.push(newEmployee);
    // TODO: Add doc to DB
    try {
       await addDoc(collection(db, "employees"), {
        ...newEmployee
      });
    } catch (err) {
      console.log(err)
    }
    


    setEmployees(employees);
    setIsAdding(false);
  //  NB: setIsAdding makes the popUp go away

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${newEmployee.name} ${newEmployee.email}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };




  // // handleSubmit
  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const newEmployee = {
  //     name, 
  //     email,
  //     phoneNo, 
  //     leaveType
  //   };

  //   if(!name || !email || !phoneNo || !leaveType){
  //     toast.error("Please! provide value for the input field");
  //       } else {
  //         toast.success("Data added successfully🎉 !!");
  //         // Todo: Add doc to DB
  //         // employees.push(newEmployee);
  //         setEmployees(employees);
  //       }
  //   }


  return (
    <div className="flex justify-center pt-[5em]">
      <form onSubmit={() => setIsEditing(false)}  className="flex flex-col h-screen font-bold">
        {/* additem */}
        <h3 className="text-xl text-red-400 mb-2 text-center">
          Edit Employees
        </h3>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter name.."
          name="name"
          className="p-2 w-80 leading-5 mb-5 rounded-md border border-green-500 outline-none"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}         
          value={email}
          type="email"
          name="email"
          placeholder="Enter email..." 
          className="p-2 w-80 mb-5 leading-5 border rounded-md border-green-500 outline-none"
        />
        <label htmlFor="phoneNo">Phone No</label>
        <input
          onChange={(e) => setPhoneNo(e.target.value)}
          value={phoneNo}
          type="number"
          name="phoneNo"
          placeholder="Enter phone..."
          className="p-2 w-80 mb-5 rounded-md leading-5 border border-green-500 outline-none"
        />
        <label htmlFor="LeaveType">Leave Type</label>
        <input
          onChange={(e) => setLeaveType(e.target.value)}
          value={leaveType}
          type="text"
          name="leaveType"
          placeholder="Enter leave type..."
          className="p-2 w-80 rounded-md leading-5 border border-green-500 outline-none"
        />
        <div className="mt-3 flex justify-evenly">
         <Link to="/"><button className="bg-red-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Cancel
          </button></Link> 
          <button  onClick={handleUpdate} className="bg-green-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
