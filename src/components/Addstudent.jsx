import React from "react";
import { useState } from "react";
import { useAddstudentMutation } from "../studentapi/apiSlice";
import { useNavigate } from "react-router-dom";

export const Addstudent=()=>{  
  const [formData, setFormData] = useState({
    name: '',
    age:'',
    email: '',
    mobile: '',
    branch:'',
    place:'',
  });
  
  const navigate =useNavigate();
  const [addstudent] =useAddstudentMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit =async (e) => {
    e.preventDefault();
    await addstudent(formData);
    navigate('/');
  };



    return(
        <div>
            <form  onSubmit={handleSubmit} className="max-w-md mx-auto p-5 bg-gray-200 shadow-lg rounded">
                <h3 className='text-2xl font-bold flex items-center justify-center p-4'>Enter Student Details </h3>
                <div className="mb-4">
                    <label className="block ">Student Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                 </div>

                 <div className="mb-4">
                    <label className="block ">Student Age</label>
                    <input type="text" id="age" name="age" value={formData.age}  onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                 </div>

                 <div className="mb-4">
                    <label className="block ">Email</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                 </div>

                 <div className="mb-4">
                    <label className="block ">Mobile</label>
                    <input type="text" id="mobile" name="mobile" value={formData.mobile}  onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                 </div>

                 <div className="mb-4">
                    <label className="block ">Branch</label>
                    <input type="text" id="branch" name="branch" value={formData.branch}  onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                 </div>

                 <div className="mb-4">
                    <label className="block ">District</label>
                    <input type="text" id="place" name="place" value={formData.place}  onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                 </div>

                 
                 
                 <button type="submit" className=" py-2 px-4  bg-blue-500 text-white rounded  hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                   Add Student
              </button>
             </form>
        </div>
    )
}