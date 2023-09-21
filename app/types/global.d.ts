

//this states the type MeetingInfo and Meeting is in global scope.
//After doing this, add the following code ""typeRoots": ["./types", "./node_modules/@types"]," to tsconfig.json

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

}