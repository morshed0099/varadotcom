import React, { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DasboardHeader from './Components/DasboardHeader';
import useAdmin from './hooks/useAdmin';
import { userAuth } from './AuthProvider';
import useBuyer from './hooks/useBuyer';
import useSeller from './hooks/useSeller';

const DasboradLayout = () => {
    const [open, setOpen] = useState(false)
    const { user } = useContext(userAuth)
    const [isAdmin, isAdminLoader] = useAdmin(user?.displayName)
    const [isBuyer, isBuyerLoader] = useBuyer(user?.displayName)
    const [isSeller, isSellerLoader] = useSeller(user?.displayName)

    console.log(isAdmin, isBuyer, isSeller,);
    return (
        <div>
            <div className='flex'>
                <div className={`w-[200px] text-white lg:ml-0 ml-[-200px] lg:flex   lg:flex-col gap-4 p-4  min-h-[100vh] bg-gray-800 duration-700 ease-in ${open && "ml-[0px] absolute duration-500 ease-in lg:static"}`}>
                    <div>
                        <div className='flex z-50 justify-end'>
                            <p onClick={() => setOpen(false)} className='text-2xl z-50 fixed block lg:hidden mt-[-7px] duration-700 ease-in hover:bg-white text-white hover:text-black rounded-full w-10 h-10 text-center font-bold '>x</p>
                        </div>
                        <div className='fixed'>
                            <div className='h-[1000px] my-8 w-[170px] lg:mt-4 flex flex-col gap-4'>
                                {
                                    isSeller && <>
                                        <NavLink onClick={() => setOpen(false)} to='/dashboard/addproduct'>Add product</NavLink>
                                        <NavLink to='/dashboard/myaddedproduct'>MyAddedProducts</NavLink>
                                    </>
                                }

                                {
                                    isAdmin && <>
                                        <NavLink to='/dashboard/allseller'>AllSeller</NavLink>
                                        <NavLink to='/dashboard/allbuyer'>AllBuyer</NavLink>
                                    </>
                                }
                                {
                                    isBuyer && <NavLink to='/dashboard/myfavourite'>My Favorite</NavLink>
                                }

                            </div>
                        </div>
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