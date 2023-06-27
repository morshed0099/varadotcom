import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const [open, setOpen] = useState(!true)


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("navHeader").style.backgroundColor = "white";
            document.getElementById("logo").style.color = "green";
            document.getElementById("slogan").style.color = "black";

        } else {
            document.getElementById("navHeader").style.backgroundColor = "transparent";
            document.getElementById("logo").style.color = "red";
            document.getElementById("slogan").style.color = "gray";
        }
    }
    return (
        <div style={{ zIndex: "40" }} className='bg-white sticky top-0'>
            <div id='navHeader'  className='px-4 z-40 w-full absolute bg-transparent'>
                <div className='p-2 '>
                    <nav className='flex z-40 justify-between items-center'>
                        <div>
                            <h1 id='logo' className='text-red-600 text-2xl font-bold'>VaraDotCom</h1>
                            <p id='slogan' className='lg:text-gray-200 text-green-800 font-semibold px-[4px]'>Catch Your Dream</p>
                        </div>
                        <div className='block lg:hidden'>
                            <button onClick={() => setOpen(!open)}>
                                {
                                    open ? <IoMdClose className='bg-white  text-2xl' /> : <FcMenu className='bg-white  text-2xl' />
                                }
                            </button>
                        </div>
                        <div className='hidden lg:flex gap-4 justify-center items-center'>
                            <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/'>Home</NavLink>
                            <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/job'>Job</NavLink>
                            <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/news'>News</NavLink>
                            <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/developer'>Developer</NavLink>
                            <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/dashboard'>Dasborad</NavLink>
                            <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/login'>Login</NavLink>
                        </div>
                    </nav>
                </div>
                <div className='relative w-full  bg-opacity-75 z-40'>
                    <div className={`lg:hidden mx-auto ${open ? "flex flex-col w-full items-center duration-500 absolute  ease-in gap-2 mt-0 p-4 bg-gray-100 mx-auto " : "absolute flex flex-col duration-700 ease-in w-full items-center justify-center mt-[-300px]"}`}>
                        <NavLink className='w-full bg-gray-300 text-center  text-gray-950 duration-700 transition  rounded-2xl' to='/'>Home</NavLink>
                        <NavLink className='w-full bg-gray-300 text-center rounded-md  text-gray-950 ' to='/job'>Job</NavLink>
                        <NavLink className='w-full bg-gray-300 text-center rounded-md  text-gray-950' to='/news'>News</NavLink>
                        <NavLink className='w-full bg-gray-300 text-center rounded-md  text-gray-950' to='/developer'>Developer</NavLink>
                        <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/dashboard'>Dasborad</NavLink>
                        <NavLink className='hover:text-red-500 text-gray-950 duration-1000 ease-in-out' to='/login'>Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;