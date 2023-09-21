"use client"

import React from 'react';

//components
import Button from '../Components/Button'
import Page from '../home/page';

//Declare the blueprints for the Addmeeting
// type MeetingInfo = {
//   title: string;
//   description: string;
//   img: string;
//   address: string;
// }

// Creates a blueprint for the parameters or props to the function
type Properties = {
  addMeeting: (form: React.FormEvent, formData: MeetingInfo) => void
}

// All the properties from the interface can now be pass as parameters to this function
 const AddPage: React.FC<MeetingInfo> = ({addMeeting}) => {

  // State for the data for the meeting
  const [meetingData, setMeetingData] = React.useState<MeetingInfo>({title: '',
  description: '',
  address: '',
});
  const [submitButton, setSubmitButton] = React.useState("");


  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setMeetingData((prevState) => ({...prevState, [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMeeting(e, meetingData);
  };


  return (
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
          <input name="title" value={meetingData.title} onChange={handleForm} type='text'></input>
        <label>Address: </label>
          <input name="address" value={meetingData.address} onChange={handleForm} type='text'></input>
        <label>Description: </label>
          <input name="description" value={meetingData.description} onChange={handleForm} type='text'></input>
        <div>
        <Button button='Add new meetings'/>
        <Page meeting={meetingData as MeetingInfo} />
        </div>
      </form>
  )
}

export default AddPage;