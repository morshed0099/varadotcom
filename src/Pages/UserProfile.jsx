import React, { useState } from 'react';
import UserDetails from '../Components/UserDetails';

const UserProfile = () => {

    const dammy = [
        {
            text: "hello"
        }
    ]
    const hola = [
        {
            text: "gola"
        }
    ]
    const nola = [
        {
            text: "nola"
        }
    ]
    const [activeRoute, setActiveRoute] = useState('details')
    const [data, setData] = useState(dammy)

    const handelRouteDalits = () => {
        setData(dammy)
        setActiveRoute('details')
    }
    const hadelroutePost = () => {
        setData(hola)
        setActiveRoute('post')
    }
    const handelrouteImage = () => {
        setData(nola)
        setActiveRoute('image')
    }
    console.log(activeRoute);
    return (
        <div>
            <div>
                <div>
                    <img className='w-full h-[70vh]' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                </div>
                <div className='flex p-4 justify-evenly'>
                    <div>
                        <img className='w-36 mt-[-60px] h-36 rounded-full' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-green-800 text-3xl font-bold'>Md.Golam Morshed</h1>
                        <p className='text-1xl text-gray-400 font-semibold'>Dhaka,Bangladesh</p>
                        <div className='flex gap-2'>
                            <button onClick={handelRouteDalits} className={` ${activeRoute === 'details' ? "text-white bg-green-800 px-4 py-1 rounded-2xl" : "rounded-2xl px-4 py-1"}   `}>Details</button>
                            <button onClick={hadelroutePost} className={` ${activeRoute === 'post' ? "text-white bg-green-800 px-4 py-1 rounded-2xl" : "rounded-2xl px-4 py-1"}   `}>All Post</button>
                            <button onClick={handelrouteImage} className={` ${activeRoute === 'image' ? "text-white bg-green-800 px-4 py-1 rounded-2xl" : "rounded-2xl px-4 py-1"}   `}>Images</button>
                        </div>

                    </div>

                </div>
                {
                    activeRoute === "details" &&
                    <UserDetails />
                }

            </div>
        </div>
    );
};

export default UserProfile;