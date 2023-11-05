

import React, { useReducer, Dispatch } from "react";
import { createContext } from "react";
import { ITask } from "./Types";
import { tasks } from "./Types";
import Lists from "./Lists";
import Form from "./form/page";
import AllLists from "./list/page";




interface ITodoContext {
    activeTasks: ITask[];
    dispatch: Dispatch<any>;
    
}

interface IToDoState {
    activeTasks: ITask[];
}


export const ToDoContext = createContext<ITodoContext>({activeTasks: [], dispatch: () =>{}});

const reducer = (state:IToDoState, action:any) => {
        console.log(state)
        console.log(action)

        switch(action.type) {
            case 'add': 
            const {data} = action;
            data.id = new Date().toJSON()
            return {...state, activeTasks: [action.data, ...state.activeTasks]};
            
        }
        return state;
}

const ToDoProvider  = () => {

    const data = {activeTasks: tasks}
    const[state, dispatch] = useReducer(reducer, data);
    console.log(state);

    return ( 
        <div>
        <ToDoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
            <Lists/>
            <Form/>
            <AllLists title={"asd"} address={"asd"} description={"asd"}/>
        </ToDoContext.Provider>
        </div>
     
     );0
}
 
export default ToDoProvider ;

