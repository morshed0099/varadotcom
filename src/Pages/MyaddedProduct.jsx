import React, { useContext, useEffect, useState } from 'react';
import { userAuth } from '../AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MyaddedProduct = () => {
    const { user } = useContext(userAuth)

    const url = `http://localhost:5000/addedporduct/${user?.uid}`
    const { data: myadded = [], refetch } = useQuery({
        queryKey: ['myadded', user?.uid],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }

    })


    const handelPublish = (id) => {
        fetch(`http://localhost:5000/publisrent/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ publish: true })
        }).then(res => res.json()).then(data => {
            if (data.matchedCount > 0) {
                refetch()
            }
        })
    }
    const handelDelete = (id) => {
        const yes = window.confirm('are you sure ? delete  product')
        if (yes) {
            fetch(`http://localhost:5000/rent/delete/${id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        refetch()
                    }
                })
        }
    }
    return (
        <div>
            <div class="flex flex-col overflow-x-auto lg:overflow-hidden  ">
                <div class="sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-x-auto">
                            <table class="min-w-full  text-left text-sm font-light">
                                <thead class="border-b border font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Image</th>
                                        <th scope="col" class="px-6 py-4">Title</th>
                                        <th scope="col" class="px-6 py-4">Rent</th>
                                        <th scope="col" class="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myadded.map(added =>
                                            <tr class="border-b border dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <img className='w-10 h-10 rounded-full' src={added.img} alt="" />
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4">{added.title}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{added.rent}</td>
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <Link to={`/dashboard/update/${added._id}`}> <button className='px-2 py-1 font-medium mr-1 bg-green-600 text-white rounded-xl'>edit</button></Link>
                                                    <button onClick={() => handelDelete(added._id)} className='px-2 py-1 bg-red-500 text-white font-medium rounded-xl mr-1'>Delete</button>
                                                    <button onClick={() => handelPublish(added._id)} className='px-2 py-1 font-medium bg-gray-800 text-white rounded-xl '>
                                                        {added.publish ? "published" : "publish"}
                                                    </button>
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

export default MyaddedProduct;