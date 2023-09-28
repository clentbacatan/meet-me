
"use client"

import React from 'react';
import {useContext, useReducer} from 'react'
import { createContext } from 'react';


//components
import AllMeetingList from '../Components/AllMeetingList';
import { meetingLists } from '../data';
import { AddMeetingState } from '../interface/global';



export const MeetingContext =  createContext<MessageContext>({meetings: [], dispatch: () => {}});

const MettingList: React.FC<AllMeetingListProps> = () => {

  const reducer = (state:AddMeetingState , action: any) => {
      console.log(state);
      console.log(action);

      switch(action.type) {
        case 'submit' : 
        return {...state, meetings: [action.data, ...state.meetings] };
      }

      return {...state}
}

const data = { meetings: meetingLists }
const [state, dispatch]= useReducer(reducer, data)

    return ( 
        <div>
          <MeetingContext.Provider value={{ meetings: state.meetings, dispatch }}>
            <AllMeetingList meetings={meetingLists}/>
          </MeetingContext.Provider>
        </div>
           
     );
}
 
export default MettingList;