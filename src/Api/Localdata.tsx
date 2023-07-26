import { proxy } from "valtio";

interface Task {
    id: number;
    icon: string;
    title: string;
    time?: string;
    pinned: boolean;
    details?: string[];
    images?: string[];
    startTime?: string;
    endTime?: string;
}

const ArrayData: Task[] = [
    {
        id: 1,
        icon: '⏰',
        title: 'Wake up Buddy',
        time: '7:30 AM',
        pinned: true,
    },
    {
        id: 2,
        icon: '🧘🏻',
        title: 'Morning Yoga',
        time: '8:30 AM',
        pinned: false,
    },
    {
        id: 3,
        icon: '🏋🏻‍♀️',
        title: 'Daily Workout',
        time: '9:00 AM',
        pinned: false,
        details: ['Squat 10x3', 'Push up 10x3', 'Push up 10x3'],
    },
    {
        id: 4,
        icon: '👨🏻‍💻',
        images: [
            'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
            'https://www.marktechpost.com/wp-content/uploads/2023/05/7309681-scaled.jpg',
            'https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?size=626&ext=jpg'
        ],
        title: 'Shift Project Kick Off Pt.1',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        pinned: false,
        details: [
            'Zoom call, kick off with Elena and Jordan from Shift.',
        ],
    },
    {
        id: 5,
        icon: '🍣',
        title: 'Skype Sushi',
        time: '12:30 PM',
        pinned: false,
        details: ['Lunch with Ally, fight this quarantine with humor!'],
    },
    {
        id: 6,
        icon: '👨🏻‍💻',
        title: 'Dribbble Shot',
        time: '2:00 PM',
        pinned: false,
        details: ['Working on a new shot!'],
    },
];

export const Ldata = proxy<{ arrData: Task[] }>({ arrData: [] });

Ldata.arrData.push(...ArrayData);