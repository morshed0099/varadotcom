import React from 'react';
import { FaMosque } from 'react-icons/fa';
import { MdCleanHands, MdFireExtinguisher } from 'react-icons/md';

const Disclaimer = () => {
    return (
        <div>
            <div>
                <div className='relative my-6'>

                    <div className='relative'>
                        <img className='h-[620px]  lg:h-[300px] w-full' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                    </div>
                    <div className='w-full h-full top-0 absolute bg-white bg-opacity-75'>

                    </div>
                    <h2 className=' absolute top-6 text-2xl font-bold text-gray-950 ml-4'>Disclaimar </h2>
                    <div className='absolute p-3 top-12   flex flex-col lg:top-1/4  lg:flex-row gap-4 justify-center items-center '>
                        <div className='tex-white hover:bg-gray-100 ease-linear duration-700  rounded-lg shadow-md font-semibold border border-gray-500 p-3'>
                            <div className='mt-[-33px] p-2 flex justify-center'>
                                <MdFireExtinguisher className='w-12 h-12 text-red-800 rounded-full bg-white' />
                            </div>
                            <h2 className='text-center text-2xl my-2 font-bold text-green-800 '>Cmmunity Help</h2>
                            <p>As Member of society you have some resposiable for better society.If you found any kind of unfare and unsave for our society call the help number</p>
                        </div>
                        <div className='tex-white rounded-lg hover:bg-gray-100 ease-linear duration-700 shadow-md font-semibold border border-gray-500 p-3'>
                            <div className='mt-[-33px] p-2 flex justify-center'>
                                <MdCleanHands className='w-12 h-12 text-red-800 rounded-full bg-white' />
                            </div>
                            <h2 className='text-center text-2xl my-2 font-bold text-green-800 '>Clean Your Area</h2>
                            <p>As a member of society you have to need clean your area .We made clean our society for living helthly and peachfully.Please make clean and live clean</p>
                        </div>
                        <div className='tex-white relative hover:bg-gray-100 ease-linear duration-700 rounded-lg shadow-md font-semibold border border-gray-500 p-3'>
                            <div className='mt-[-33px] p-2 flex justify-center'>
                                <FaMosque className='w-12 text-red-800 h-12 rounded-full bg-white' />
                            </div>
                            <h2 className='text-center text-2xl my-2 font-bold text-green-800 '>Religon Peachfull</h2>
                            <p className='text-justify'>Don't Disturb any body who can lead their own life .Keep cleam and peachfull.We respect evebody and every religon </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Disclaimer;