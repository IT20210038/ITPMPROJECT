import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
//import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/manageEvent',
        icon: <ImIcons.ImManWoman />,
        cName: 'nav-text'
    },
    {
        title: 'Employees',
        path: '/manageChannel',
        icon: <FaIcons.FaCalendarPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/manageStaff',
        icon: <ImIcons.ImUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Payments',
        path: '/manageLab',
        icon: <ImIcons.ImLab />,
        cName: 'nav-text'
    },
    
    
];