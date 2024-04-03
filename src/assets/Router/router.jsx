import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayout'
import Home from '../pages/Home/Home'
import Signup from '../pages/Signup/Signup'

export const Router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>, 
            children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'auth/signup',
                element: <Signup/>
            }
        ]

}




])