
"use client"

import React from 'react';
import { useContext, useReducer } from 'react';


//components
import { MeetingContext } from './ContextProvider';
import Button from './Button';
import { AddMeetingState } from '../interface/global';
import { meetingLists } from '../data';




const AllMeetingList:React.FC <AllMeetingListProps>  = ({meeting}) => {

     // Context from ContextProvider
    console.log(meeting);

    return (

      
        <div >
         <p>{meeting.title}</p>
         <p>{meeting.description}</p>
         <p>{meeting.address}</p>
        </div>
     
    );
       
};


 
export default AllMeetingList ;