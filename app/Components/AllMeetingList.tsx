
"use client"

import React from 'react';
import { useContext, useReducer } from 'react';


//components
import { MeetingContext } from './ContextProvider';
import Button from './Button';
import { AddMeetingState } from '../interface/global';


interface AllMeetingListProps {
    
    meetings: MeetingData[]; 
  }


const AllMeetingList:React.FC <AllMeetingListProps>  = ({}) => {

    const { meetings } = useContext(MeetingContext); // Context from ContextProvider

    console.log(meetings)

    return (

      
        <div >
            {meetings.map((meeting, index) => {
                
                return (
                
                <div className='mt-12 ml-3' key={index}>
                    <h3>{meeting.title}</h3>
                    <img src={meeting.picture} alt="Meeting"/>
                    <p>{meeting.address}</p>
                    <p>{meeting.description}</p>
                    <Button buttonName="Add to Favorite"/>
                </div>
                )
            })}
        </div>
     
    );
       
};


 
export default AllMeetingList ;