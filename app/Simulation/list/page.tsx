
"use client"


import React from 'react'
import Lists from '../Lists'
import { useContext } from "react";
import { ToDoContext } from '../Provider';
import { ITask } from '../Types';


export default function AllLists(task: ITask) {

  const {activeTasks} = useContext(ToDoContext);
  console.log(activeTasks);
  
  return (
    <div> 
      <Lists activeTasks={activeTasks} dispatch={function (value: any): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
  )
}
