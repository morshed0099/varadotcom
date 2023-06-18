import React from 'react';
import { Link } from 'react-router-dom';

const HotDeal = () => {
    const id = '2'
    return (
        <div>
            <div className='flex flex-col bg-gray-100 mb-6 lg:flex-row  rounded-lg border p-4 shadow-md gap-4 justify-between'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full rounded-lg' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                </div>
                <div className='flex w-full lg:w-1/2 flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-center my-4'>Deposite $2000 every month and get new appertment</h2>
                    <p className='text-gray-500 text-justify my-5'><i>
                        We Offer $2000 for every monthly deposite after 2 year letter you will get band new appertment for 100 year's.
                    </i> </p>
                    <p className='text-gray-500 my-5 text-justify'>
                        <i>
                            We have money return polices for customer any kind of need . If you paying any deposite and don't loose your interest we will back your deposite money as soon as you want.
                        </i>
                    </p>
                    <div className='flex justify-center'>
                        <Link to={`/details/${id}`}> <button className='px-4 py-2 bg-green-800 hover:bg-green-900 text-white rounded-md shadow-md '>Details</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mb-6 bg-white  lg:flex-row  rounded-lg border p-4 shadow-md gap-4 justify-between'>

                <div className='flex w-full lg:w-1/2 flex-col justify-center '>
                    <h2 className='text-2xl font-bold text-center my-4'>Deposite $3000 every month and get new appertment</h2>
                    <p className='text-gray-500 text-justify my-5'><i>We Offer $3000 for every monthly deposite after 2 year letter you will get band new appertment for 100 year's.</i> </p>
                    <p className='text-gray-500 my-5 text-justify'>
                        <i>
                            We have money return polices for customer any kind of need . If you paying any deposite and don't loose your interest we will back your deposite money as soon as you want
                        </i>.
                    </p>
                    <div className='flex justify-center'>
                        <Link to={`/details/${id}`}> <button className='px-4 py-2 bg-green-800 hover:bg-green-900 text-white rounded-md shadow-md '>Details</button></Link>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full rounded-lg' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HotDeal;