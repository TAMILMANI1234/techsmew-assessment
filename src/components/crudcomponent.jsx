import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Crudheader } from "./crudheadercomponent";
import { Displaycomponent } from "./displaycomponent";
import { Addstudent } from "./Addstudent";
import { Updatecomponent } from "./updatecomponent";
 
const Crudcomponent=()=>{
   
     
    return(
        <div>
           <BrowserRouter>
              <Crudheader />
               <Routes>
                  <Route path="/" element={<Displaycomponent />} />
                  <Route path="addstudent" element={<Addstudent />} />
                  <Route path="/updatestudent/:id" element={<Updatecomponent />} />
               </Routes>
           </BrowserRouter>
        </div>


    );

}

export default Crudcomponent;