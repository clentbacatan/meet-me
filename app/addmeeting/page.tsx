import React from 'react'


//components
import Button from '../Components/Button'

//Declare the blueprints for the Addmeeting

type MeetingInfo = {
  title: string;
  description: string;
  img: string;
  address: string;
}

// All the properties from the interface can now be pass as parameters to this function
 const page: React.FC<MeetingInfo> = ({title, description, img, address}) => {
  return (
    <section>
        <form>
        <label>Title: </label>
          <input></input>
          <label>Address: </label>
          <input></input>
           <label>Description: </label>
          <input></input>
        </form>
        <div>
        <Button button='Add new meetings'/>
        </div>
    </section>
  )
}


export default page;