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
                <div className=' w-[100%]'>
                    <img className='w-[100%] md:h-[900px] sm:h-[600px]' src="https://i.pinimg.com/originals/37/af/df/37afdf55b42966be547a6b5270aaa876.jpg" alt="" />
                </div>
                <div className='absolute w-full top-0 bg-black  h-full  bg-opacity-75'></div>

                <div className='absolute top-[200px] lg:top-[200px] '>
                    <h2 className='text-2xl font-bold my-8 text-center text-white'>For Booking And Selling Appirtment</h2>
                    <h4 className='text-center text-6xl mb-8 font-semibold text-gray-100 '>Create Accaount</h4>
                    <div className='flex lg:flex-row flex-col gap-4 justify-center '>
                        <button onClick={() => hadelBokking()} className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>Booking Accaount</button>
                        <button onClick={() => handelSeller()} className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>Selling Accaount</button>
                    </div>
                </div>
                <div onClick={() => setOpen(false)} className={`${open && " flex justify-center items-center absolute w-full top-0 bg-black  h-full  bg-opacity-60 "}`}>
                    <div className={` absolute  z-50 ${open ? " top-5  lg:top-[5%] my-auto md:overflow-auto lg:max-h-[730px] lg:overflow-hidden md:max-h-[500px] md:w-[95%] sm:w-[95%] lg:w-[40%] absolute duration-500 bg-gray-800" : "left-0 top-[-1000px]"}`}>
                    <div className='flex justify-end p-1'>
                        <button onClick={() => setOpen(false)} className='text-white z-50  text-3xl font-bold hover:bg-gray-600 duration-500 ease-out  w-12 h-12 text-center  rounded-full '>
                            <span>x</span>
                        </button>
                    </div>
                    <div className='py-4 w-full  px-2'>
                        <LoginFrom type={type} />
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Login;