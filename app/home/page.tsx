"use client"


import React, {useReducer} from 'react'
import { createContext } from 'react';


//components
import Button from '../Components/Button';
import Nav from '../Components/Nav';
import { AddMeetingState } from '../interface/global';
import AllMeetingList from '../Components/AllMeetingList';
import { meetingLists } from '../data';

export const MeetingContext =  createContext<MessageContext>({meetings: [], dispatch: () => {}});

// The property "buttonName" will be pass as props to the "button.tsx" component
const Page: React.FC = ({}) => {


  // The function that will facilitate the request from the addButton
  const reducer = (state:AddMeetingState , action: any) => {
      console.log(state);
      console.log(action);
   
      switch(action.type) {
        case "submit":
        return {...state, meetings: [action.data, ...state.meetings]};
      }

      return {...state}
  }

const data = { meetings: meetingLists }
const [state, dispatch]= useReducer(reducer, data)


  return (
      <div>
          <MeetingContext.Provider value={{ meetings: state.meetings, dispatch }}>
            <Nav/>
            <AllMeetingList meetings={meetingLists}/>
        </MeetingContext.Provider>
       </div>
  )
}

export default Page;
