import { createBrowserRouter, redirect } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayout'
import Home from '../pages/Home/Home'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'
import All from '../pages/All/All'
import One from '../pages/One/One'


export const Router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>, 
            children: [
            {
                path: '',
                element: <Landing/>
                
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
                element:<Home/>,
                loader:()=>{
                    if(localStorage.getItem('token')){
                        return null
                    }else{
                        return redirect ('/')
                    }
                }
            },{
                path:'all',
                element:<All/>

            },
            {
                path:'one',
                element:<One/>

            }
        ]

}




])