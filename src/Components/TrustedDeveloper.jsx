import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TrustedDeveloper = () => {
    return (
        <div>
            <div className='p-3 rounded-xl hover:bg-gray-100 duration-700 ease-linear hover:translate-y-2   shadow-md border'>
                <div>
                    <h1 className='text-2xl font-bold my-4 text-center text-green-800'>Comapy Name</h1>
                    <p className='text-gray-500  text-justify my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, commodi, rem voluptas, consectetur libero voluptatum minus deleniti vero omnis incidunt suscipit? Asperiores aut voluptatibus delectus.</p>
                </div>
                <div className='flex  justify-between gap-8 my-2'>
                    <button className='text-green-800'>View Website</button>
                    <div className='flex gap-2'>
                        <FaFacebook className='text-green-800 hover:text-red-800 duration-500 ease-linear transition-all text-2xl' />
                        <FaTwitter className='text-green-800 hover:text-red-800 duration-500 ease-linear transition-all text-2xl' />
                        <FaLinkedin className='text-green-800 hover:text-red-800 duration-500 ease-linear transition-all text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedDeveloper;