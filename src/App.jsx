import React from "react";
import { useState } from "react";
import FormComponent  from "./components/formcomponent";
import Crudcomponent from "./components/crudcomponent";

const App =()=>{
  const [activeTab, setActiveTab] = useState('tab1');

  const TabChangeEvent = (tab) => {
    setActiveTab(tab);
  };
  
  return (
   <div>
     <div className="bg-gray-200 p-4">
            <h1 className="text-2xl font-bold text-blue-600">Assessment Tasks</h1>
            <h3 class="text-2xl font-bold absolute text-blue-600 top-0 right-0 pr-4">K.Tamilmani</h3>
            <p  class=" font-bold absolute text-blue-600 top-8 right-0 pr-4">B.Tech</p>
      </div>

      <div className="flex flex-col ">
          <div className="flex items-center justify-center mb-4 p-4">
            <button
              className={`  focus:outline-none mr-4 py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-violet-600 border border-violet-600   ${activeTab === 'tab1' ? 'bg-violet-600 border' : 'bg-white  text-black'}`}
              onClick={() => TabChangeEvent('tab1')}
            >
              Form Validation
            </button>
            <button
              className={`focus:outline-none mr-4 py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-violet-600 border border-violet-600  ${activeTab === 'tab2' ? 'bg-violet-600 border' : 'bg-white text-black'}`}
              onClick={() => TabChangeEvent('tab2')}
            >
              CRUD Operations
            </button>
          </div>
          
          <div className="p-4">
            {activeTab === 'tab1'? <div><FormComponent /></div>: <div><Crudcomponent/></div>}  
          </div>
        </div>
    </div>
  );
  
}
export default App;