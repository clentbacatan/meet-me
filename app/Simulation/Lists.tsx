"use client"
import React from "react";


import { useContext } from "react";
import { ToDoContext } from "./Provider";
import { ITask } from "./Types";
import { Dispatch } from "react";
import Link from "next/link";
import Button from "@/app/Components/Button";
import { ITodoContext } from "./form/page";


const Lists:React.FC<ITodoContext> = ({activeTasks}) => {
        
    const {title, address, description} = activeTasks;
    console.log(title);  

    const onRenderCell = (task: ITask) => (
        <div className="mt-12 ml-8" key={task.id}>
            <p>{title}</p>
            <p>{address}</p>
            <p>{description}</p>
        </div>
    )
    
    return ( 
        <div>
            {activeTasks.map(onRenderCell)}
        </div>

     );
    
}
 
export default Lists;