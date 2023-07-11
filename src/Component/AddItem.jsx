import React from "react";
import { Link } from "react-router-dom";

const AddItem = () => {
  return (
    <div className="flex justify-center pt-[5em]">
      <form className="flex flex-col h-screen font-bold">
        {/* additem */}
        <h3 className="text-xl text-red-400 mb-2 text-center">
          Add Department
        </h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name.."
          className="p-2 w-80 mb-5 rounded-md border border-green-500 outline-none"
        />
        <label htmlFor="procurement">Procurement</label>
        <input
          type="text"
          placeholder="Enter Procurement..." 
          className="p-2 w-80 mb-5 border rounded-md border-green-500 outline-none"
        />
        <label htmlFor="Accounting">Procurement</label>
        <input
          type="text"
          placeholder="Enter Procurement..."
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
