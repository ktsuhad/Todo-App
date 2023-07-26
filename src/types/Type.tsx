export interface Task {
    id: number;
    icon: string;
    title: string;
    date:  any; // Change React.ChangeEvent to Date for date values
    time: string;
    startTime: string;
    endTime: string;
    details:readonly string[]; // Change to an array of strings
    pinned: boolean;
    personal: boolean;
    color: string;
    isCompleted: boolean; // Add the missing property
    selectedData: null; // Add the missing property
}