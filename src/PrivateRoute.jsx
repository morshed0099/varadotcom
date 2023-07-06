import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from './AuthProvider';

const PrivateRoute = ({children}) => {
    let location=useLocation()
    const {user,loader}=useContext(userAuth)
    if(loader){
        return <div className='flex justify-center items-center mt-10'><h1>Loading....</h1></div>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
 
}

export default PrivateRoute;