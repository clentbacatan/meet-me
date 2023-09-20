import React from 'react'

type Meeting = {
    meeting: MeetingInfo
}


const Meet: React.FC<Meeting> = ({meeting}) => {
  return (
      <div className="card-parent">
        <div>{meeting.map((meet, index) => (
        <div key={index}>
          <p>{meet.title}</p>
          <p>{meet.description}</p>
          <button className='border-2 border-solid hover:bg-orange-400 px-4 py-3 mt-8 mx-auto rounded-lg lg:font-semibold'>Add to favorite</button>
        </div>
      ))}
    </div>
       </div>
  )
}

export default Meet;
