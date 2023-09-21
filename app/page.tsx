"use client"


import { InferGetStaticPropsType } from 'next'
import { useState } from 'react';


//components
import Page from './home/page';
import AddPage from './addmeeting/page';
import Button from './Components/Button';
import Nav from './Components/Nav';
import Link from 'next/link';
import React from 'react';


export default function Home({meetings,} :InferGetStaticPropsType<typeof getStaticProps>) {
  const [meetingList, setMeetingList] = React.useState(meetings || [])

  const addMeeting =  (e: React.FormEvent, meetingData: MeetingInfo) => {
    e.preventDefault()
    const meeting: MeetingInfo = {
      title: meetingData.title,
      description: meetingData.description,
      address: meetingData.address
    }

    setMeetingList([...meetingList, meeting])
  }


  return (
    <main className="">
      <div className="">
        <Nav/>
        <AddPage addMeeting={addMeeting} />
        {meetingList.map((meeting: MeetingInfo, index) => (
          <Page key={index} meeting={meeting} />
        ))}
      </div>
    </main>
  )
}

