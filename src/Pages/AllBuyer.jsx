import React from 'react';
import { useQuery } from 'react-query';

const AllBuyer = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://varadotcom-server.vercel.app/user/allbuyer')
            const data = await res.json()
            return data;
        }
    })

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
    console.log(buyers);
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
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Roll</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        buyers.map(buyer => <tr className="border-b border dark:border-neutral-500">

                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                <img className='w-10 h-10 rounded-full' src={buyer.photoURL} alt="" />
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">{buyer.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{buyer.userRoll}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button onClick={() => handelDelete(buyer._id)} className='text-white font-medium px-2 py-1 mr-2 rounded-2xl bg-green-800'>Delete</button>
                                                <button onClick={()=>hadelVerify(buyer._id)} className='text-white font-medium px-2 py-1  rounded-2xl bg-red-800'>Verify</button>
                                            </td>
                                        </tr>)
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

export default AllBuyer;