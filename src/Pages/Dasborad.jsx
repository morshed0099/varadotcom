import React, { useContext } from 'react';
import { userAuth } from '../AuthProvider';

const Dasborad = () => {
    const {user}=useContext(userAuth)
    return (
        <div className='flex flex-col justify-center items-center mt-14'>
            <h2 className='text-2xl font-bold justify-center mt-14 '>
                welcom to dasboard
            </h2>
            <img className='w-36 h-36 rounded-xl' src={user?.photoURL ? user.photoURL :"https://th.bing.com/th/id/OIP.Oeqec8Gy7ELKcqVg8-NBswHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7"} alt="" />
        </div>
    );
};

export default Dasborad;