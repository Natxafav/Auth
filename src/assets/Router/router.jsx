import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../Layouts/mainLayout'
import Home from '../pages/Home/Home'

export const Router = createBrowserRouter([
        {path: '/',
        element: <MainLayout/>,
        chidren:[
            {
                path: '',
                element: <Home/>
            },
        ]

}




])