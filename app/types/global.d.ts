

//this states the type MeetingInfo and Meeting is in global scope.

export{}

declare global {

type MeetingInfo = {
    title: string;
    description: string;
}

type Meeting = {
    Meet: MeetingInfo[];
}

}