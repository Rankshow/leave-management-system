import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ref, set, child } from "firebase/database";
import { db } from "../Component/config/firebase"
import { toast } from 'react-toastify';


const AddItem = () => {
  // all states of all input.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const navigate = useNavigate();

  
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dbRef = ref(db);

    if(!name || !email || !phoneNo || !leaveType){
      toast.error("Please! provide value for the input field");
    } else {
    set(child(dbRef,"management/", {name, email, phoneNo, leaveType}));
      toast.success("Data added successfully🎉 !!");
      navigate("/");
      setName(name);
      setEmail(email);
      setPhoneNo(phoneNo);
      setLeaveType(leaveType);
    }
  }

  return (
    <div className="flex justify-center pt-[5em]">
      <form onSubmit={handleSubmit} className="flex flex-col h-screen font-bold">
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
          onChange={(e) => setPhoneNo(e.target.value)}
          type="number"
          name="PhoneNo"
          placeholder="Enter phone..."
          className="p-2 w-80 mb-5 rounded-md leading-8 border border-green-500 outline-none"
        />
        <label htmlFor="LeaveType">Leave Type</label>
        <input
          onChange={(e) => setLeaveType(e.target.value)}
          type="text"
          name="leaveType"
          placeholder="Enter leave type..."
          className="p-2 w-80 rounded-md leading-8 border border-green-500 outline-none"
        />
        <div className="mt-3 flex justify-evenly">
         <Link to="/"><button className="bg-red-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Cancel
          </button></Link> 
          <button  className="bg-green-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
