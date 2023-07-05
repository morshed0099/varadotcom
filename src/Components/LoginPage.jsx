import React, { useContext } from 'react';
import { userAuth } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ setopen, stopPropagration, type }) => {
    
   const navigate=useNavigate()   
    const { singWithEmail } = useContext(userAuth)
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const passwoord = form.passwoord.value;
        console.log(email, passwoord, type);
        singWithEmail(email,passwoord)
        .then(result=>{
            const user=result.user
            navigate('/')
        }).catch(error=>console.error(error))

    }
    return (
        <div onClick={(e) => stopPropagration(e)} className='px-2 lw-full' >
            <form onSubmit={(e) => handelSubmit(e)}>
                <div className='flex justify-center flex-col gap-4'>
                    <h2 className='text-center text-3xl font-bold text-white'>Login Form</h2>

                    <div>
                        <lebel className='text-1xl font bold text-white'>Email:</lebel>
                    </div>
                    <div>
                        <input className='w-full  px-4 py-2 rounded-2xl' type="Email" name='email' placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <lebel className='text-1xl font bold text-white'>Password:</lebel>
                    </div>
                    <div>
                        <input className='w-full  px-4 py-2 rounded-2xl' type="Pssword" name='passwoord' />
                    </div>
                    <div>
                        <button className='px-20 w-full py-3 bg-green-600 hover:bg-green-800 duration-500 ease-out text-white'>
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <span className='text-gray-400 mt-2'>Are you New  ? <span onClick={() => setopen(false)} className='text-red-400 font-xl hover:underline cursor-pointer'>Signup here</span></span>
            </div>
        </div >
    );
};

export default LoginPage;