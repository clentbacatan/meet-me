"use client"


import React, {useReducer, useContext} from 'react'



//components
import Button from '../Components/Button';
import Nav from '../Components/Nav';

import ContextProvider from '../Components/ContextProvider';
import MeetingForm from '../addmeeting/page';
import AllMeetingList from '../Components/AllMeetingList';



// The property "buttonName" will be pass as props to the "button.tsx" component
const Page: React.FC = ({}) => {


  // All the value declared from ContextProvider file can now be used to the children which is the AllMeetingList component
  return (
      <div>
           <ContextProvider> 
            <Nav/>
            <AllMeetingList />
          </ContextProvider>
         
       </div>
  )
}

export default Page;