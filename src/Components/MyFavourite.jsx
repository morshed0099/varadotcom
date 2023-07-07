import React, { useContext } from 'react';
import { userAuth } from '../AuthProvider';
import { useQuery } from 'react-query';

const MyFavourite = () => {
    const { user } = useContext(userAuth)

    const { data: booking = [], } = useQuery({
        queryKey: ['booking', user?.uid],
        queryFn: async () => {
            const res = await fetch(`https://varadotcom-server.vercel.app/mybooking/${user?.uid}`)
            const data = await res.json()
            return data
        }
    })
    console.log(booking);
    return (
        <div>
            <div className="flex flex-col overflow-x-auto lg:overflow-hidden  ">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full  text-left text-sm font-light">
                                <thead className="border-b border font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Image</th>
                                        <th scope="col" className="px-6 py-4">Seller Phone </th>
                                        <th scope="col" className="px-6 py-4">Rent Title</th>
                                        <th scope="col" className="px-6 py-4">Rent</th>
                                        <th scope="col" className="px-6 py-4">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        booking.map(book =>
                                            <tr className="border-b border dark:border-neutral-500">
                                                 <td className="whitespace-nowrap px-6 py-4">
                                                    <img className='w-10 h-10 rounded-full' src={book.img} alt="" />
                                                 </td>
                                                 <td className="whitespace-nowrap font-medium px-6 py-4">{book.sellerPhoneNumber}</td>
                                                <td className="whitespace-nowrap font-medium px-6 py-4 ">{book.title}</td>
                                                <td className="whitespace-nowrap font-medium px-6 py-4">{book.rent}</td>
                                                <td className="whitespace-nowrap font-medium px-6 py-4">
                                                    <button className='px-4 py-1 font-medium bg-red-800 mr-2 rounded-2xl text-white'>Delete</button>
                                                    <button className='px-4 py-1 font-medium bg-green-800 rounded-2xl text-white'>Pay</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    <tr >

                                        
                                       
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFavourite;