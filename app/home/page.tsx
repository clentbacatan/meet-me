import React from 'react'


const meetingData: Meeting = {
  Meet: [
      {
          title: "Team Meeting",
          description: "Discuss project progress and plan next steps.",
          address: "Cebu City"
      },
      
  ]
};


const page: React.FC<Meeting> = ({ }) => {
  return (
      <div className="card-parent mx-5 my-5">
        <div>{meetingData.Meet.map((meet, index) => (
        <div key={index}>
          <p>{meet.title}</p>
          <p>{meet.description}</p>
          <p>{meet.address}</p>
          <button className='border-2 border-solid hover:bg-orange-400 px-4 py-3 mt-8 mx-auto rounded-lg lg:font-semibold'>Add to favorite</button>
        </div>
      ))}
    </div>
       </div>
  )
}

export default page;
