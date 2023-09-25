
"use client"

import React from 'react';
import { useContext } from 'react';


//components
import { MeetingContext } from '../home/page';
import Button from './Button';


interface AllMeetingListProps {
    
    meetings: MeetingData[]; 
  }


const AllMeetingList:React.FC<AllMeetingListProps>  = ({meetings}) => {
    
    const { allMeetings } = useContext(MeetingContext);
    
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