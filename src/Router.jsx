
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import RentDetails from './Pages/RentDetails';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import DasboradLayout from './DasboradLayout';
import AddPorduct from './Pages/AddPorduct';
import MyaddedProduct from './Pages/MyaddedProduct';
import AllSeller from './Pages/AllSeller';
import Dasborad from './Pages/Dasborad';
import AllBuyer from './Pages/AllBuyer';
import MyFavourite from './Components/MyFavourite';
import ErrorPage from './Components/ErrorPage';
import UpdateRent from './Components/UpdateRent';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
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
                path: '/profile/:id',
                loader: async ({ params }) => {
                    return fetch(`http//:localhost:3000/profile/${params.id}`)
                },
                element: <UserProfile />
            },
         
        ]
    },
    {
        path: "/dashboard",
        element: <DasboradLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dasborad />
            },
            {
                path: "/dashboard/addproduct",
                element: <AddPorduct />
            },
            {
                path: "/dashboard/myaddedproduct",
                element: <MyaddedProduct />
            },
            {
                path: "/dashboard/allseller",
                element: <AllSeller />
            },
            {
                path: "/dashboard/allbuyer",
                element: <AllBuyer />
            },
            {
                path: '/dashboard/myfavourite',
                element: <MyFavourite />
            },
            {
                path:'/dashboard/update/:id',
                loader:async({params})=>{
                    return await fetch(`https://varadotcom-server.vercel.app/dasboard/update/${params.id}`)
                },
                element:<UpdateRent />
            }
         
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
])


