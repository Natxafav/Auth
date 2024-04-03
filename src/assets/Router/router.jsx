import { createBrowserRouter, redirect } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayout'
import Home from '../pages/Home/Home'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'


export const Router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>, 
            children: [
            {
                path: '',
                element: <Landing/>,
                loader:()=>{
                    if(!localStorage.getItem('token')){
                        return null
                    }else{
                        return redirect ('/home')
                    }
                }
            },
            {
                path: 'signup',
                element: <Signup/>
            }, {
                path:'login',
                element:<Login/>

            },
            {
                path:'home',
                element:<Home/>
            }
        ]

}




])