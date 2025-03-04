import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from'./index'
import Temp from'./temp'
import Cse from './department/cse'
import Ae from './department/ae'
import Nav from './nav'
import Facilities from './facilities'
import About from './about'
import Cl from './facilities/cl'
import Etl from './facilities/etl'
import Ftl from './facilities/ftl'
import Gh from './facilities/gh'
import Spc from './facilities/Spc'
import Departement from './department'
import Student from './student'
import Layout from './Layout'
import Smartclass from './facilities/smartclass'
import Et from './department/et'
import Ft from './department/ft'
import Mom from './department/mom'
const Viue = () => {
    const router = createBrowserRouter([{
        path: "/",
        element: <Layout />, // Use Layout as the wrapper
        children: [
        {
            path:"*",
            element:<Nav/>
        },
        {
            path:"/",
            element:<>
            <Nav/>
            <Index/></>
        },
        {
            path:"/about",
            element:<>
            <Nav/>
            <About/></>
        },
        {
            path:"/temp",
            element:<>
            <Nav/><Temp/></>
        },
        {
            path:"/department/ae",
            element:<>
            <Nav/>
            <Ae/></>
        },
        {
            path:"/department/cse",
            element:<>
            <Nav/>
            <Cse/></>
        },
        {
            path:"/department/et",
            element:<>
            <Nav/>
            <Et/></>
        },
        {
            path:"/department/ft",
            element:<>
            <Nav/>
            <Ft/></>
        },
        {
            path:"/department/mom",
            element:<>
            <Nav/>
            <Mom/></>
        },
        {
            path:"/department",
            element:<>
            <Nav/><Departement/></>
        },
        {
            path:"/student",
            element:<>
            <Nav/><Student/></>
        },
        {
            path:"/facilities/Solar-Powered Campus",
            element:<><Nav/><Spc/></>
        },
        {
            path:"/facilities",
            element:<><Nav/><Facilities/></>
        },
        {
            path:"/facilities/Computer-Lab",
            element:<><Nav/><Cl/></>
        },
        {
            path:"/facilities/Electronics-Lab",
            element:<><Nav/><Etl/></>
        },
        {
            path:"/facilities/Fashion-Technology-Lab",
            element:<><Nav/><Ftl/></>
        },
        {
            path:"/facilities/Girl's-Hostel",
            element:<><Nav/><Gh/></>
        },
        {
            path:"/facilities/Smart-Classroom",
            element:<><Nav/><Smartclass/></>
        }
    ],
},
    ])
  return (
<><RouterProvider router={router}/></>
  )
}
export default Viue;
