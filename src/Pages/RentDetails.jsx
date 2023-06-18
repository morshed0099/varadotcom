import React from 'react';
import Comments from '../Components/Comments';

const RentDetails = () => {
    return (
        <div className='  max-w-[1480px] mx-auto border-gray-300'>
            <div className='px-4'>
                <div className='pt-10 pb-8'>
                    <h2 className='text-center md:text-2xl font-bold my-8 '>Details About Home</h2>
                </div>
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className=' w-full lg:w-1/2'>
                        <div>
                            <div className='p-3 rounded-lg border hover:border-gray-500'>
                                <img src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                            </div>
                            <div className='flex mt-6 gap-2'>
                                <div className='p-2 border shadow-md  rounded-lg hover:border-gray-500 '>
                                    <img className='w-24 h-24' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                                </div>
                                <div className='p-2 border shadow-md  rounded-lg hover:border-gray-500 '>
                                    <img className='w-24 h-24' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                                </div>
                                <div className='p-2 border shadow-md  rounded-lg hover:border-gray-500 '>
                                    <img className='w-24 h-24' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' rounded-xl p-3 shadow-md border border-gray-200 '>
                            <div className='flex flex-col lg:flex-row  gap-4'>
                                <h1 className='text-4xl font-bold'>
                                    4 room 1 bed room
                                </h1>
                                <p className='text-gray-500 mt-6'>
                                    Date Post :24/02/2023
                                </p>
                            </div>
                            <div className='text-2xl  mt-6 font-semibold text-gray-500'>
                                <p>Monthly : $ 40000</p>
                                <p>Division : Dhaka</p>
                                <p>Thana : Lalbag</p>
                            </div>
                            <div className=' flex gap-4 mt-6'>
                                <button className='px-4 py-2 text-white rounded-md shadow-md bg-green-800 hover:bg-green-700 duration-700 ease-out'>Book Now</button>
                                <button className='px-4 py-2 text-white rounded-md shadow-md bg-red-800 hover:bg-red-700 duration-700 ease-out'>Pay</button>
                            </div>
                        </div>
                        <div className=' rounded-xl p-3 my-6  border-gray-200 shadow-md  border'>
                            <p className='text-green-800 text-center'>Owner</p>
                            <div className='flex items-center gap-2 '>
                                <div>
                                    <img className='w-24 h-24 rounded-full  ' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                                </div>
                                <div className=''>
                                    <p>Golam Morshed</p>
                                    <p>mdgolammorshed0099@gmail.com</p>
                                    <p>+8801991394353</p>
                                    <div className='flex gap-4'>
                                        <p className='text-green-800'>Message</p>
                                        <p className='text-green-800'>Send proposal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default RentDetails;