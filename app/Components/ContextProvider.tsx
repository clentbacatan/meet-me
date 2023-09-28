


import React, {useReducer} from 'react'
import { createContext } from 'react';



export const MeetingContext =  createContext<MeetingContext>({meetings: [], dispatch:() => {}})

type Props = {
    children: React.ReactNode;
}


const reducer = (state: AddMeetingState, action: any) => {
    console.log(state);
    console.log(action);

    switch(action.type) {
        case "add" :
        return {...state, meetings: [action.data, ...state.meetings]} //returns the new state
    }
    
    return state;
        
}

export default function ContextProvider(props:Props) {


    const meetingLists: MeetingData[]  = [

    ]

    const data = {meetings: meetingLists}
    const [state, dispatch] =  useReducer(reducer, data);
    console.log(data);

  return (
    <MeetingContext.Provider value={{ meetings: state.meetings, dispatch }}>
        {props.children}
    </MeetingContext.Provider>
  )
}
