import React from 'react';
import { useQuery } from 'react-query';

const AllSeller = () => {

    const { data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://varadotcom-server.vercel.app/user/allseller')
            const data = await res.json()
            return data
        }
    })
    const hadelVerify=(id)=>{
        fetch(`https://varadotcom-server.vercel.app/user/verify/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify()
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiycount>0){
                refetch()
            }
        })
    }
    console.log(sellers);
    const handelDelete = (id) => {
        const yes = window.confirm('are you sure delete user ?')
        if (yes) {
            fetch(`https://varadotcom-server.vercel.app/detele/user/${id}`, {
                method: "DELETE",
                headers: { 'content-type': "application/json" }
            }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        refetch()
                    }
                })
        }
    }
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
                                                    <button onClick={()=>handelDelete(seller?._id)} className='px-2 py-1 rounded-2xl mr-2 font-medium bg-green-600 text-white'>Delete</button>
                                                    <button onClick={()=>hadelVerify(seller?._id)} className='px-2 py-1 rounded-2xl bg-red-600 font-medium text-white'>
                                                       {
                                                        seller?.varify ?"Verifyed":"verify"
                                                       } 
                                                        
                                                    </button>
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