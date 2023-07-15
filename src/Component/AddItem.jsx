import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import { db } from "../Component/config/firebase"
import { toast } from 'react-toastify';


const AddItem = () => {
  // storing all state in one variable
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");



  const navigate = useNavigate();

  
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dbRef = ref(db);
  //  const {name, procurement, payment} = data;
  
    if(!name || !email || !payment){
      toast.error("Please! provide value for the input field");
    } else {
    get(child(dbRef,"management/"));
      toast.success("Data added successfully🎉 !!");
      navigate("/");
    }
  }

  return (
    <div className="flex justify-center pt-[5em]">
      <form  className="flex flex-col h-screen font-bold">
        {/* additem */}
        <h3 className="text-xl text-red-400 mb-2 text-center">
          Add Department
        </h3>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name.."
          name="name"
          className="p-2 w-80 leading-8 mb-5 rounded-md border border-green-500 outline-none"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter email..." 
          className="p-2 w-80 mb-5 leading-8 border rounded-md border-green-500 outline-none"
        />
        <label htmlFor="PhoneNo">Phone No</label>
        <input
          onChange={(e) => setPayment(e.target.value)}
          type="number"
          name="PhoneNo"
          placeholder="Enter phone..."
          className="p-2 w-80 mb-5 rounded-md border border-green-500 outline-none"
        />
        <label htmlFor="LeaveType">Leave Type</label>
        <input
          onChange={(e) => setLeaveType(e.target.value)}
          type="text"
          name="leaveType"
          placeholder="Enter leave type..."
          className="p-2 w-80 rounded-md border border-green-500 outline-none"
        />
        <div className="mt-3 flex justify-evenly">
         <Link to="/"><button className="bg-red-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Cancel
          </button></Link> 
          <button onClick={handleSubmit} className="bg-green-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
