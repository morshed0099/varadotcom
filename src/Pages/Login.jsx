import React, { useState } from 'react';
import LoginFrom from '../Components/LoginFrom';
import Header from '../Components/Header';

const Login = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('')

    const hadelBokking = () => {

        setType('buyer')
        setOpen(true)
    }

    const handelSeller = () => {
        setType('seller')
        setOpen(true)
    }

    return (

        <div>
            <Header />
            <div className='relative flex justify-center'>
                <div className='hidden w-[100%] h-[100vh]  lg:block'>
                    <img className='w-[100%] block h-[100vh]' src="https://i.pinimg.com/originals/37/af/df/37afdf55b42966be547a6b5270aaa876.jpg" alt="" />
                </div>
                <div className='absolute w-full top-0 bg-black lg:h-[100vh] h-[100vh] lg:bg-gray-950 lg:bg-opacity-75'></div>

                <div className='absolute top-[200px] lg:top-[200px] '>
                    <h2 className='text-2xl font-bold my-8 text-center text-white'>For Booking And Selling Appirtment</h2>
                    <h4 className='text-center text-6xl mb-8 font-semibold text-gray-100 '>Create Accaount</h4>
                    <div className='flex lg:flex-row flex-col gap-4 justify-center '>
                        <button onClick={() => hadelBokking()} className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>Booking Accaount</button>
                        <button onClick={() => handelSeller()} className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>Selling Accaount</button>
                    </div>
                </div>
            </div>
            <div onClick={() => setOpen(false)} className={`${open && " flex justify-center items-center absolute top-0 w-full h-full bg-black bg-opacity-40"}`}>
                <div className={` absolute  z-50 ${open ? " top-20 lg:top-[20%] my-auto absolute duration-1000 bg-gray-800" : "top-[-500px]"}`}>
                    <div className='flex justify-end p-1'>
                        <button onClick={() => setOpen(false)} className='text-white  text-3xl font-bold hover:bg-gray-600 duration-500 ease-out  w-12 h-12 text-center  rounded-full '>
                            <span>x</span>
                        </button>
                    </div>
                    <div className='py-4 px-2'>
                        <LoginFrom type={type} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;