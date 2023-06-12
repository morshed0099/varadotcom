import React from 'react';

const Comments = () => {
    const userName='maleo';
    return (
   
        <div className='p-4'>
            <div class="relative mb-6 mt-6  h-11 w-full min-w-[200px]">
                <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5
                     font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-800 peer-focus:after:scale-x-100 peer-focus:after:border-green-800 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Comment
                </label>
            </div>
            <button className='px-4 py-2 rounded-md shadow-md bg-green-800 hover:bg-green-900 text-white'>
                submit
            </button>
            <div>
                <div className='flex gap-4 mt-6'>
                    <img src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" className='w-12 h-12 rounded-full' alt="" />
                    <div>
                        <h6 className='text-black font-semibold'>
                            Golam Morshed
                        </h6>
                        <p className='text-gray-500'>
                            this is great new for all people thank you
                        </p>
                        <div className='flex gap-4 text-green-800'>
                            <button>
                                replay
                            </button>
                            <button>
                                like
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-6'>
                    <img src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" className='w-12 h-12 rounded-full' alt="" />
                    <div>
                        <h6 className='text-black font-semibold'>
                            Golam Morshed
                        </h6>
                        <p className='text-gray-500'>
                            this is great new for all people thank you
                        </p>
                        <div className='flex gap-4 text-green-800'>
                            <button>
                                replay
                            </button>
                            <button>
                                like
                            </button>
                        </div>
                    </div>
                </div>
                {/* reply  */}
                <div className='flex ml-8  gap-4 mt-6'>
                    <img src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" className='w-12 h-12 rounded-full' alt="" />
                    <div>
                        <h6 className='text-black font-semibold'>
                            Golam Morshed
                        </h6>
                        <p className='text-gray-500'>
                         reply to@{userName}   this is great new for all people thank you
                        </p>
                        <div className='flex gap-4 text-green-800'>
                            <button>
                                replay
                            </button>
                            <button>
                                like
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex   gap-4 mt-6'>
                    <img src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" className='w-12 h-12 rounded-full' alt="" />
                    <div>
                        <h6 className='text-black font-semibold'>
                            Golam Morshed
                        </h6>
                        <p className='text-gray-500'>
                         reply to@{userName}   this is great new for all people thank you
                        </p>
                        <div className='flex gap-4 text-green-800'>
                            <button>
                                replay
                            </button>
                            <button>
                                like
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;