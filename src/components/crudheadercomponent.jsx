import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Crudheader=()=>{
    return(
       <nav className=" flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4 mb-4 sticky top-0">
         <div className="flex w-full flex-wrap items-center justify-between px-3">
             <div className="ms-2">
                <button className="text-xl text-black dark:text-white  pr-5"><Link to="/">Read Student</Link></button>
                <button className="text-xl text-black dark:text-white"><Link to="/addstudent">Add student</Link></button>     
            </div>         
        </div>
       </nav>
    );
}