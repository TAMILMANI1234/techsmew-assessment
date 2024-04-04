import React from "react";
import { useGetstudentsQuery,useDeleteStudentMutation} from "../studentapi/apiSlice";
import { Outlet, Link } from "react-router-dom";

export const Displaycomponent=()=>{
    const { data:students,isLoading,isSuccess,isError } = useGetstudentsQuery();
    const [deletestudent] =useDeleteStudentMutation();
    let isempty=false;
    if(JSON.stringify(students) === "{}"){
        isempty=true;
    }
    return(
        <div>
         
         {isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
         {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
         {isSuccess &&  
            <div className="flex flex-col overflow-x-auto ">
                           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Age</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Mobile</th>
                            <th scope="col" className="px-6 py-3">Branch</th>
                            <th scope="col" className="px-6 py-3">District</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className=" border-b dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                                <td className="px-6 py-4 font-medium text-gray-900" >{student.age}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{student.email}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{student.mobile}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{student.branch}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{student.place}</td>
                                <td>
                                    <Link to={`/updatestudent/${student.id}`}> <button className="mr-3 -px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">Edit</button></Link>
                                    <button className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring" onClick={()=>deletestudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
              </table>

            </div>
         
         } 

     

     </div>
     


    );
}