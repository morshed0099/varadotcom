import React from 'react';

const BookNowModal = ({ setopen,open,handelAnimation }) => {
    const date = new Date()
    const handelsubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const postdate = date
        const name = form.name.value;
        const address = form.address.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        console.log(postdate, name, email, address, phoneNumber)
        setopen(false);
    }
  
    return (
        <div className=''>
            <div className='flex flex-col mt-[10px] justify-center items-center'>
                <div className='  bg-gray-800 p-4 m-4 lg:w-[40%] w-[60%] top-10'>
                    <div className='flex justify-end'>
                        <p onClick={() =>handelAnimation()} className='text-white text-2xl hover:text-2xl font-bold cursor-pointer hover:text-gray-600 '>x</p>
                    </div>
                    <form onSubmit={handelsubmit}>
                        <div>
                            <h2 className='text-4xl font-bold text-white my-4 text-center'>Booking From</h2>
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Date :</p></div>
                            <input defaultValue={date} readOnly type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="date"/>
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Name :</p></div>
                            <input placeholder='type your name' readOnly type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="name"/>
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Address :</p></div>
                            <input placeholder='type your address' type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="address"/>
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>Phone Number :</p></div>
                            <input placeholder='type you Phone Nuber' type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="phoneNumber" />
                        </div>
                        <div>
                            <div><p className='text-white mt-2 mb-2'>email:</p></div>
                            <input placeholder='type you Phone Nuber' readOnly type="text" className='w-full rounded-2xl bg-white text-black px-4 py-2' name="email" />
                        </div>
                        <div>
                            <button  className='px-4 w-full mt-4 mb-2 font-bold py-2 rounded-2xl bg-green-700 hover:bg-green-900 text-white duration-500 ease-in'>Confirem Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNowModal;