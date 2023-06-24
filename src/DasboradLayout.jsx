import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DasboardHeader from './Components/DasboardHeader';

const DasboradLayout = () => {
    const [open, setOpen] = useState(false)
    console.log(open);
    return (
        <div>
            <div className='flex '>

                <div className={`w-[200px]  text-white   ${open ? 'flex flex-col p-4  left-0' : "hidden"} lg:flex  lg:flex-col gap-4 p-4 min-h-[100vh] bg-gray-800`}>
                    <div className='flex justify-end'>
                        <p onClick={() => setOpen(false)} className='text-2xl block lg:hidden mt-[-7px] duration-700 ease-in hover:bg-white text-white hover:text-black rounded-full w-10 h-10 text-center font-bold '>x</p>
                    </div>
                    <div className='mt-20 lg:mt-4 flex flex-col gap-4'>
                        <NavLink onClick={() => setOpen(false)} to='/dashboard/addproduct'>Add product</NavLink>
                        <NavLink to='/dashboard/myaddedproduct'>MyAddedProducts</NavLink>
                        <NavLink to='/dashboard/allseller'>AllSeller</NavLink>
                        <NavLink to='/dashboard/allbuyer'>AllBuyer</NavLink>
                        <NavLink to='/dashboard/myfavourite'>My Favorite</NavLink>

                    </div>
                </div>
                <div className='flex-1 p-4'>
                    <div className='flex items-center'>
                        <div className={`lg:hidden w-10 block ${open ? "hidden" : "block "}`}>
                            <button onClick={() => setOpen(true)}>Open</button>
                        </div>
                        <div className='flex-1'>
                            <DasboardHeader />
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DasboradLayout;