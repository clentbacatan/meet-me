
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
         <p>{title}</p>
         <p>{description}</p>
         <p>{address}</p>
        </div>
     
    );
       
};


 
export default AllMeetingList ;