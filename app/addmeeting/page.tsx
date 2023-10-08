"use client"

import React, { useState, useReducer } from 'react';
import swal from 'sweetalert';
import MeetingInput from '../CustomHook/meetingInput';
import { MeetingContext } from '../Components/ContextProvider';
import { meetingLists } from '../data';
import AllMeetingList from '../Components/AllMeetingList';


const reducer = (state:AddMeetingState , action: any) => {
  console.log(state);
  console.log(action);      

  switch(action.type) {
    case 'add' :
      const {data} = action;
      data.id = new Date().toJSON();
    return {...state, meetings: [action.data, ...state.meetings] };
  }

  return {...state}
}


// All the properties from the interface can now be pass as parameters to this function
 const MeetingForm: React.FC<MeetingInfo> = ({}) => {


  //Custom Hooks
  const title = MeetingInput("")
  const address = MeetingInput("")
  const description = MeetingInput("")

    const data = { meetings: meetingLists }
    const [state, dispatch]= useReducer(reducer, data);

  // dispatch to trigger the reducer

  
  const addButtonSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    const data: MeetingData = {title : title.value, address: address.value, description: description.value}
    dispatch({type: "add", data });
    swal("New meeting was added");

  }

  return (
    <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addButtonSubmit}>
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  >
          Add Meeting
        </button>
      </div>
    </form>
      {state.meetings.map(meeting => {
        console.log(meeting);
        <AllMeetingList key={meeting.id} meeting={meeting}/>
      })}
  </div>
  )
}

export default MeetingForm;