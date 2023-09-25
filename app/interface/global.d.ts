import { Dispatch } from "react";
//this states the type MeetingInfo and Meeting is in global scope.
//After doing this, add the following code ""typeRoots": ["./types", "./node_modules/@types"]," to tsconfig.json
 import { meetingLists } from "../data";

export{}

declare global {

type MeetingInfo = {
    title: string;
    description: string;
    address: string;
}

type Meeting = {
    Meet: MeetingInfo[];
}


// Defines the interface for the Layout
interface Layout  {
    className:string
    buttonName: string
    
}

export interface MeetingData {

    title: string;
    picture?: string;
    address: string;
    description: string;

}

//interface for the reducer function
interface MessageContext {
    meetings : MeetingData[]
    dispatch: Dispatch<any>
  }

}

//interface for the state of the reducer hook 
export interface AddMeetingState {
    meetings : MeetingData[]
}