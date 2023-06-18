
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import RentDetails from './Pages/RentDetails';
import Login from './Pages/Login';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/details/:id',
                loader: async ({ params }) => {
                    return fetch(`http//:localhost:3000/${params.id}`)
                },
                element: <RentDetails />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])


