import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookNowModal from './BookNowModal';
import { userAuth } from '../AuthProvider';

const HomeRent = ({ rents }) => {
    const { user } = useContext(userAuth)

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res=>res.json)
            .then(data=>console.log(data));
    }, [])

    const [open, setopen] = useState(false)
    const handelAnimation = () => {
        setopen(false)
    }
    const { areaDivison, areaThana, img, img2, img3, phoneNumber, rent, sellerId, sellerName, title, _id } = rents
    console.log(user?.userRoll);
    return (
        <>
            <div className='p-4 border  hover:shadow hover:bg-gray-100 hover:scale-105 hover:border-gray-600 duration-300 ease-out shadow-md rounded-xl'>
                <div className='overflow-hidden'>
                    <div className='overflow-hidden'>
                        <img className='hover:scale-125 w-full h-[300px]  duration-500 ' src={img} alt="" />
                    </div>
                    <h2 className='text-2xl text-center my-4 font-semibold text-green-800'>{title}</h2>
                    <div className='flex justify-between items-center my-4'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-500'>Division : {areaDivison}</p>
                            <p className='text-gray-500'>Monthly : <span className='text-green-800 font-semibold text-1xl'>${rent}</span></p>
                            <p className='text-gray-500'>Thana : {areaThana}</p>
                            <p className='text-gray-500'>Phone :{phoneNumber}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex-col items-center gap-2'>
                                <div>
                                    <p className='text-gray-500'>Post Date : 26.03.22</p>
                                </div>
                                <div>
                                    <h6 className='text-gray-500'>  Owner : {sellerName}</h6>
                                    <Link to={`/profile/${sellerId}`}> <button className='text-green-600 hover:text-green-800'>
                                        view profile
                                    </button></Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {
                    user?.uid === sellerId ? <Link to={`/dashboard/update/${_id}`}> <button className='text-green-600 font-medium'>Edit </button></Link> : <div className='flex justify-between items-center'>
                        <Link to={`/details/${_id}`}> <button className='px-6 py-2 rounded-md shadow-md text-white bg-green-800 hover:bg-green-950 hover:shadow border duration-500 ease-in-out'>Details View</button></Link>
                        {
                            user?.userRoll === "seller" ? "" : <button onClick={() => setopen(true)} className='px-6 py-2  rounded-md shadow-md text-white bg-red-800 hover:bg-red-950 duration-500 ease-in-out'>Book Now</button>
                        }
                    </div>
                }
            </div>
            <div className='absolute'>
                <div className={`${open && "fixed  overflow-x-hidden duration-1000 ease-in overflow-auto  z-50 top-0 left-0 bg-opacity-25 bg-gray-800 w-[100%] h-[100%]"}  `}>
                    <div className={`${open ? "scale-105 mt-10 duration-500  ease-linear" : "scale-90 duration-00 ease-in"}`}>
                        {
                            open && <BookNowModal
                                setopen={setopen}
                                handelAnimation={handelAnimation}
                                open={open}
                                rents={rents}
                                key={rents._id}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeRent;