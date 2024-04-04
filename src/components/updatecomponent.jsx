import React, { useEffect } from "react";
import { useState } from "react";
import { useGetstudentQuery,useUpdatestudentMutation } from "../studentapi/apiSlice";
import { useNavigate, useParams } from "react-router-dom";


export const Updatecomponent=()=>{
    const {id} =useParams();
    const {data} = useGetstudentQuery(id);
    const [updatestudent] = useUpdatestudentMutation();
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        id:id,
        name: '',
        age:'',
        email: '',
        mobile: '',
        branch:'',
        place:'',
      });
      
      useEffect(()=>{
         if(data){
            setFormData({...formData,name:data.name,age:data.age,email:data.email,mobile:data.mobile,branch:data.branch,place:data.place})
         }
      },[data]);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value });
      };
     
      const handleSubmit =async (e) => {
        e.preventDefault();
        await updatestudent(formData);
        navigate('/'); 
      };
    
    return(
        <div>
            <form  onSubmit={handleSubmit} className="max-w-md mx-auto p-5 bg-gray-200 shadow-lg rounded">
                <h3 className='text-3xl font-bold flex items-center justify-center p-4'>Enter Details </h3>
                <div className="mb-4">
                    <label className="block ">Student Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                </div>

                <div className="mb-4">
                    <label className="block ">Student Age</label>
                    <input type="text" id="name" name="age" value={formData.age}  onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                </div>

                <div className="mb-4">
                    <label className="block ">Email</label>
                    <input type="text" id="name" name="email" value={formData.email} onChange={handleChange} 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"/>
                </div>

                <div className="mb-4">
                    <label className="block ">Mobile</label>
                    <input type="text" id="name" name="mobile" value={formData.mobile}  onChange={handleChange}
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
                   Save                 
                 </button>
            </form>
    </div>
    )
}