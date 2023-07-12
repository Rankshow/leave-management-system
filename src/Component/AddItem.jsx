import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Component/config/firebase"
import { toast } from 'react-toastify';


const AddItem = () => {
  // storing all state in one variable
  const inputStates = {
    name: "",
    procurement: "",
    payment: ""
  }

  // state
  const [data, setData] = useState(inputStates);
  const [items, setItems] = useState({});
  
  const {name, procurement, payment} = data;
  
  // const history = useHistory();
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  if(!name || !procurement || !payment){
    toast.error("Please! provide value for the input field");
  } else {
    db.child("management").push(data, (err) => {
      if(err) {
        toast.error(err);
      }else {
        toast.success("Data added successfull🎉 !!");
        // navigate("/");
      }
    });
    // setTimeout(() => history.push("/"), 500);
  }
  }

  // handleOnchange
  const handleChange = (e) => {
   const {name, value} = e.target;
   setData({...data, [name]: value})
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
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="Enter name.."
          name="name"
          className="p-2 w-80 mb-5 rounded-md border border-green-500 outline-none"
        />
        <label htmlFor="procurement">Procurement</label>
        <input
          onChange={handleChange}
          value={procurement}
          type="text"
          name="procurement"
          placeholder="Enter Procurement..." 
          className="p-2 w-80 mb-5 border rounded-md border-green-500 outline-none"
        />
        <label htmlFor="payment">Payemnt</label>
        <input
          onChange={handleChange}
          value={payment}
          type="text"
          name="payment"
          placeholder="Enter Payment..."
          className="p-2 w-80 rounded-md border border-green-500 outline-none"
        />
        <div className="mt-3 flex justify-evenly">
         <Link to="/"><button className="bg-red-500 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Cancel
          </button></Link> 
          <button className="bg-green-500 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
