
import { useState } from "react";

// Custom Hook for the Input fields for the meeting form

// The React.FormEvent<HTMLInputElement | HTMLTextAreaElement" will get the value from the HTML element which is from the "input"


const MeetingInput  = (initialValue: string) => { 
    
    const [value, setValue] = useState(initialValue)

    const onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value)
    }

    return {value, onChange}
}
 
export default MeetingInput ;