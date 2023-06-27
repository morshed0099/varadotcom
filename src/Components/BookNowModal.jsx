import React from 'react';

const BookNowModal = ({ setopen }) => {
    const date = new Date()
    const handelsubmit=(e)=>{
       e.preventDefault()
        const form= e.target
         const postdate=date
         const name= form.name.value;
         const address=form.address.value;
         const phoneNumber=form.phoneNumber.value;
         const email= form.email.value;

    }

    return (
        <div className='fixed z-50 top-0 left-0 bg-opacity-25 bg-gray-800 w-[100%] h-[100%]'>
            <div className=' flex flex-col mt-[10px] justify-center items-center'>
                <div className='m-4 p-4  bg-black min-w-[400px] max-h-[500px] overflow-auto'>
                    <div className='flex justify-end'>
                        <p onClick={() => setopen(false)} className='text-white text-2xl hover:text-2xl font-bold cursor-pointer hover:text-gray-600 '>x</p>
                    </div>
                    <form onSubmit={(e)=>handelsubmit(e)}>
                        <div>
                            <h2 className='text-4xl font-bold text-white my-4 text-center'>Booking From</h2>
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Date :</p></div>
                            <input defaultValue={date} readOnly type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="" id="" />
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Name :</p></div>
                            <input placeholder='type your name' readOnly type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="" id="" />
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Address :</p></div>
                            <input placeholder='type your address'  type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="" id="" />
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Phone Number :</p></div>
                            <input placeholder='type you Phone Nuber'  type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="" id="" />
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>email:</p></div>
                            <input placeholder='type you Phone Nuber' readOnly type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="" id="" />
                        </div>
                        <div>
                            <button onClick={()=>setopen(false)} className='px-4 w-full mt-4 mb-2 font-bold py-2 rounded-2xl bg-green-700 hover:bg-green-900 text-white duration-500 ease-in'>Confirem Booking</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookNowModal;