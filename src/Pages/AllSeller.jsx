import React from 'react';
import { useQuery } from 'react-query';

const AllSeller = () => {

    const { data: sellers = [], } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/allseller')
            const data = await res.json()
            return data
        }
    })
    console.log(sellers);
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
                                        <th scope="col" class="px-6 py-4">Name</th>
                                        <th scope="col" class="px-6 py-4">Roll</th>
                                        <th scope="col" class="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sellers.map(seller => 
                                            <tr class="border-b border dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                                    <img className='w-10 h-10 rounded-full' src={seller.photoURL} alt="" />
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4">{seller.name}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{seller.userRoll}</td>
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <button className='px-2 py-1 rounded-2xl mr-2 font-medium bg-green-600 text-white'>Delete</button>
                                                    <button className='px-2 py-1 rounded-2xl bg-red-600 font-medium text-white'>Verify</button>
                                                </td>
                                           </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;