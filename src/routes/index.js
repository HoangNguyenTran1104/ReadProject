import HomePage from '../container/Home/HomePage'
import DashBoard from "../container/Admin/Dashboard"
import Focus from '../container/Home/Focus'
import Work from '../container/Home/Work'
import KPI from '../container/Home/KPI'
import AdminUser from '../container/Home/AdminUser'
import Help from '../container/Home/Help'
import PageCalendar from '../container/Home/Calendar'
import Chat from '../container/Home/Chat'
import Notification from '../container/Home/Notification'

import ManageTask from "../container/Home/ManageTask"
import  ManageAccount from "../container/Admin/ManageAccount"

import HomeReport from "../container/Home/HomePage"

import Admin from '../container/Master/Admin/layouts/Admin.js'

const routesStudent = [
    {
        path:"/",
        name: "HomePage",
        exact: true,
        Component:HomePage
    },

    {
        path:"/home",
        name: "HomePage",
        exact: false,
        Component:HomeReport
    },

    {
        path:"/focus",
        exact: false,
        Component:Focus
    },

    {
        path:"/work",
        exact:false,
        Component:Work
    },

    {
        path:"/kpi",
        exact:false,
        Component:KPI
    },

    {
        path:"/admin-user",
        exact:false,
        Component:AdminUser
    },

    {
        path:"/help",
        exact:false,
        Component:Help
    },

    {
        path:"/calendar",
        exact: false,
        Component:PageCalendar
    },

    {
        path:"/chat",
        exact: false,
        Component:Chat
    },

    {
        path:"/notification",
        exact: false,
        Component:Notification
    },

    {
        path:"/work-manage-task",
        exact: false,
        Component:ManageTask
    },
]

const routesTeacher = [
    {
        path:"/dashboard",
        exact:true,
        Component:DashBoard
    },
    {
        path:"/dashboard/manage-account",
        exact:false,      
        Component:ManageAccount
    }, 
]

const routesAdmin = [
    {
        path:"/admin",
        exact:true,
        Component:Admin
    },
]


export {routesStudent,routesTeacher,routesAdmin}