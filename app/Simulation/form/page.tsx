"use client"

import React, { useContext, useState, useReducer } from 'react';
import useInput from '../useInput';
import { ToDoContext } from '../Provider';
import { ITask } from '../Types';
import { useRouter } from 'next/navigation';
import { Dispatch } from 'react';
import { tasks } from '../Types';
import Link from 'next/link';

interface ITodoContext {
    activeTasks: ITask[];
    dispatch: Dispatch<any>
}

interface IToDoState {
    activeTasks: ITask[];
}


// export const reducer = (state:IToDoState, action:any) => {
//     console.log(state)
//     console.log(action)
//     switch(action.type) {
//         case 'add': 
//         const {data} = action;
//         data.id = new Date().toJSON()
//         return {...state, activeTasks: [action.data, ...state.activeTasks]};
//     } 
    
//     return state;
// }


const Form: React.FC = () => {

    const title = useInput('');
    const address = useInput('');
    const description = useInput('');

    const router = useRouter()

    const{dispatch} = useContext(ToDoContext);


    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const data: ITask = {title: title.value, address: address.value, description:description.value}
        dispatch({ type: "add", data})
        //router.push('/Simulation/list');
    }


    return ( 
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onFormSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"
                >
                Meeting Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
                {...title}/>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
                Address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
            {...address}/>
            </div>
        
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                Description
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
                {...description}/>
            </div>
        
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add Meeting
                </button>
            </div>
            </form>
        </div>
     );
}
 
export default Form;