"use client"
import React from "react";


import { useContext } from "react";
import { ToDoContext } from "./Provider";
import { ITask } from "./Types";
import { Dispatch } from "react";
import Link from "next/link";
import Button from "@/app/Components/Button";


const Lists:React.FC = ({}) => {
        
    const {activeTasks} = useContext(ToDoContext);
    console.log(activeTasks);   

    const onRenderCell = (task: ITask) => {
        return (
        <div className="mt-12 ml-8" key={task.id}>
            <p>{task.title}</p>
            <p>{task.address}</p>
            <p>{task.description}</p>
        </div>
        )
    }
    
    return ( 
        <div>
            {activeTasks.map(onRenderCell)}
        </div>

     );
    
}
 
export default Lists;