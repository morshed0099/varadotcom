import React from 'react';

const UserDetails = () => {
    return (
        <div className='bg-white'>
            <h1 className='text-gray-400 text-2xl font-bold py-2 text-center border'>Details</h1>
            <div className='flex gap-4 border mt-2 mb-2 justify-center'>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>Name :</p>
                </div>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>Golam Morshed</p>
                </div>
            </div>
            <div className='flex gap-4 border mt-2 mb-2 justify-center'>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>Phone :</p>
                </div>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>+8801991394353</p>
                </div>
            </div>
            <div className='flex gap-4 border mt-2 mb-2 justify-center'>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>Email :</p>
                </div>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>mdgolammorshed0099@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-4 border mt-2 mb-2 justify-center'>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>Address :</p>
                </div>
                <div>
                    <p className='text-gray-400  text-1xl font-semibold'>Dhaka,Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;