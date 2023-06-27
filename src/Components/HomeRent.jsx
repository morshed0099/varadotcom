import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookNowModal from './BookNowModal';

const HomeRent = () => {
    const id = "02"
    const [open, setopen] = useState(false)

    return (
        <>
            {
                open && <BookNowModal setopen={setopen} />
            }
            <div className='p-4 border  hover:shadow hover:bg-gray-100 hover:scale-105 hover:border-gray-600 duration-300 ease-out shadow-md rounded-xl'>
                <div className='overflow-hidden'>
                    <div className='overflow-hidden'>
                        <img className='hover:scale-125 duration-500 ' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                    </div>
                    <h2 className='text-2xl text-center my-4 font-semibold text-green-800'>4 Bed room 2 washRoom</h2>
                    <div className='flex justify-between items-center my-4'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-500'>Division : Dhaka</p>
                            <p className='text-gray-500'>Monthly : <span className='text-green-800 font-semibold text-1xl'>$10000</span></p>
                            <p className='text-gray-500'>Thana : Lalbag</p>
                            <p className='text-gray-500'>Phone : 01991394353</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex-col items-center gap-2'>
                                <div>
                                    <p className='text-gray-500'>Post Date : 26.03.22</p>
                                </div>
                                <div>
                                    <h6 className='text-gray-500'>  Owner : Morshed</h6>

                                    <Link to={`/profile/${id}`}> <button className='text-green-600 hover:text-green-800'>
                                        view profile
                                    </button></Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <Link to={`/details/${id}`}> <button className='px-6 py-2 rounded-md shadow-md text-white bg-green-800 hover:bg-green-950 hover:shadow border duration-500 ease-in-out'>Details View</button></Link>
                    <button onClick={() => setopen(true)} className='px-6 py-2  rounded-md shadow-md text-white bg-red-800 hover:bg-red-950 duration-500 ease-in-out'>Book Now</button>
                </div>
            </div>
        </>
    );
};

export default HomeRent;