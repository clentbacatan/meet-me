"use client"

import React, { useState, useContext } from 'react';
import swal from 'sweetalert';
import MeetingInput from '../CustomHook/meetingInput';
import { MeetingContext } from '../home/page';



// All the properties from the interface can now be pass as parameters to this function
 const MeetingForm: React.FC<MeetingInfo> = ({}) => {


  //Custom Hooks
  const title = MeetingInput("")
  const address = MeetingInput("")
  const description = MeetingInput("")

  
  const { dispatch } = useContext(MeetingContext);

  
  const addButtonSubmit = (event:React.FormEvent) => {
    
    event.preventDefault();

    const data: MeetingData = {title : title.value, address: address.value, description: description.value}
    
    dispatch({type: "submit", data });
    console.log(dispatch);
    console.log(data)

    swal("New meeting was added");
    
  }

  return (
    <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"   onSubmit={addButtonSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Meeting Title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" {...title}/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Address
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" {...address} />
      </div>
      

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Description
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" {...description}/>
      </div>
     
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  >
          Add Meeting
        </button>
      </div>
    </form>
  </div>
  )
}

export default MeetingForm;