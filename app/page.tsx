
"use client"
import React from "react";
import { createContext } from "react";

//components
import Form from "./Simulation/form/page";
import Nav from "./Components/Nav"
import Lists from "./Simulation/Lists";
import { ITask } from "./Simulation/Types";
import { tasks } from "./Simulation/Types";
import ToDoProvider from "./Simulation/Provider";
import AllLists from "./Simulation/list/page";




export default function Home() {


  return (
    <main className="">
      <div className="">
        <Nav/>
        <Form/>
        <AllLists/>
      </div>
    </main>
  )
}


