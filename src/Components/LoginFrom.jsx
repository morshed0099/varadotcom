import React from 'react';

const stopPropagration=(e)=>{
   e.stopPropagation()
}

const handelSubmit=(e)=>{
    e.preventDefault()
   console.log(e.target.name.value)
}
const LoginFrom = ({ type }) => {
    return (
        <div onClick={(e)=>stopPropagration(e)} className='px-2'>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <div className='flex justify-center flex-col gap-4'>
                    <h2 className='text-center text-3xl font-bold text-white'>Welcome to Signup for {type}</h2>
                    <div>
                        <label className='text-1xl font bold text-white'>Name:</label>
                    </div>
                    <div>
                        <input className='w-full' type="text" name='name' placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label className='text-1xl font bold text-white'>Email:</label>
                    </div>
                    <div>
                        <input className='w-full' type="Email" name='email' placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <label className='text-1xl font bold text-white'>Password:</label>
                    </div>
                    <div>
                        <input className='w-full' type="Pssword" name='password' />
                    </div>
                    <div>
                        <button  className='px-20 w-full py-3 bg-green-600 hover:bg-green-800 duration-500 ease-out text-white'>
                            Signp up
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default LoginFrom;