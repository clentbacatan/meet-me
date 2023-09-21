import React from 'react'


type Props = {
  meeting: MeetingInfo
}


const Page: React.FC<Props> = ({meeting}) => {
  return (
      <div className="card-parent mx-5 my-5">
        <div>
          <p>{meeting.title}</p>
          <h1>{meeting.description}</h1>
          <p>{meeting.address}</p>
          <button className='border-2 border-solid hover:bg-orange-400 px-4 py-3 mt-8 mx-auto rounded-lg lg:font-semibold'>Add to favorite</button>
    </div>
       </div>
  )
}

export default Page;
