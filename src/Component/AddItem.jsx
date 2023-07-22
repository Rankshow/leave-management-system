import React, { useState, useEffect } from "react";
import { db} from "../Component/config/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';


const AddItem = ({employees, setEmployees, setIsAdding}) => {
  // all states of all input.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const navigate = useNavigate();

  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection,(db, "employees"));
    const employees = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data}))
     console.log(employees)
     setEmployees(employees);
    }

      useEffect(() => {
        getEmployees();
        }, []);
  
  const handleAdd = async e => {
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
      name,
      email,
      phoneNo,
      leaveType,
    };

    //  employees.bind(newEmployee);
    // TODO: Add doc to DB
    try {
       await addDoc(collection(db, "employees"), {
        ...newEmployee
      });
      navigate("/")
    } catch (err) {
      console.log(err)
    }
    

    
    // setEmployees(employees);
    // setIsAdding(false);
  //  NB: setIsAdding makes the popUp go away

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${name} ${email}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // // handleSubmit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

   
  //   if(!name || !email || !phoneNo || !leaveType){
  //     // toast.error("Please! provide value for the input field");
  //     //   } else {
  //     //     toast.success("Data added successfully🎉 !!");
         
  //         const newEmployee = {
  //           name,
  //           email,
  //           phoneNo,
  //           leaveType,
  //         };
  //         employees.push(newEmployee);
  //         setEmployees(employees);
  //         navigate("/")
  //       }
      
  //         // Todo: Add doc to DB
  //         try {
  //           await addDoc(collection(db, "employees"), {
  //            ...newEmployee
  //          });
  //        } catch (err) {
  //          console.log(err.message)
  //        }
          
  //   }


  return (
    <div className="flex justify-center pt-[5em]">
      <form onSubmit={() => setIsAdding(false)} className="flex flex-col h-screen font-bold">
        {/* additem */}
        <h3 className="text-xl text-red-400 mb-2 text-center">
          Add Employees
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
          <button onClick={handleAdd} className="bg-green-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
