import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import LoginPage from './LoginPage';
import { userAuth } from '../AuthProvider';



const LoginFrom = ({ type }) => {
    let userRoll = type
    const [open, setopen] = useState(false)
    const [file, setfile] = useState('')

    const { createUserWithEmail, createuserGoogle, createuserFacebook, setUser, updateUser } = useContext(userAuth)
    const stopPropagration = (e) => {
        e.stopPropagation()
    }


    const handeimage = (e) => {
 
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`
        fetch(url, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(data => {
                setfile(data.data.display_url)

            })
        }

        const handelSubmit = (e) => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value;
            const email = form.email.value;
            const password = form.passwoord.value;
            const userRoll = type
            const photoURL = file;
            console.log(photoURL,'44');
            createUserWithEmail(email, password)
                .then(result => {
                    const user = result.user
                    const updateData = {
                        displayName: name,
                        photoURL: file
                    }
                    updateUser(updateData)
                        .then(() => {
                            setUser(user);
                            createUser(email, password, name, userRoll, file)
                        }).catch(error => {
                            console.error(error)
                        })
                })
                .catch(error => console.error(error))
        }

        const handelloginGoogle = () => {
            createuserGoogle()
                .then(result => {
                    const user = result.user
                    console.log(user);
                    createUser(user.email, user.password, user.displayName, userRoll, user.photoURL)
                }).catch(error => console.error(error))
        }

        const handelloginFacebook = () => {
            createuserFacebook()
                .then(result => {
                    const user = result.user
                    createUser(user.email, user.password, user.displayName, userRoll, user.photoURL)
                }).catch(error => console.error(error))
        }

        const createUser = (email, passwoord, name, userRoll, photoURL) => {
            const userInfo = {
                email,
                passwoord,
                name,
                userRoll,
                photoURL
            }
            const user = userInfo
            fetch('http://localhost:5000/user', {
                method: "POST",
                headers: { "content-type": 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log('create user')

                    }
                    else {
                        console.log(data);
                    }
                })

        }
        return (
            <>
                {
                    open ? <LoginPage type={type} stopPropagration={stopPropagration} setopen={setopen} /> : <div onClick={(e) => stopPropagration(e)} className='px-2'>
                        <form onSubmit={(e) => handelSubmit(e)}>
                            <div className='flex justify-center  flex-col gap-4'>
                                <h2 className='text-center text-3xl font-bold text-white'>Welcome to Signup for {type}</h2>
                                <div>
                                    <lebel className='text-1xl font bold text-white'>Name:</lebel>
                                </div>

                                <div>
                                    <input className='w-full px-4 py-2 rounded-2xl' type="text" name='name' placeholder='Enter Your Name' />
                                </div>
                                <div className='text-white'>
                                    Images :
                                </div>
                                <div>
                                    <input onChange={(e)=>handeimage(e)} name='image' type="file" className='w-full py-2 px-4 text-white border rounded-2xl' />
                                </div>
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
                                        Signp up
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <p className='text-center text-1xl my-2 text-gray-400'>---------------- or -----------------</p>
                        </div>
                        <div>
                            <div>
                                <button onClick={handelloginGoogle} className='border text-white hover:text-black hover:bg-white duration-500 ease-in w-full mt-2 flex items-center justify-evenly rounded-2xl py-1 px-4'>
                                    <FcGoogle className='text-2xl' />Login with Google
                                </button>
                            </div>
                            <div>
                                <button onClick={handelloginFacebook} className='border w-full hover:bg-white  mt-2 flex items-center justify-evenly rounded-2xl py-1 text-white hover:text-black duration-500 ease-in px-4'>  <FaFacebook className='text-2xl bg-blue-900 rounded-full ml-2 text-white' />Login with Faceboo</button>
                            </div>
                        </div>
                        <div>
                            <span className='text-gray-400 mt-2'>Do you Have Alredy Accaount ? <span onClick={() => setopen(true)} className='text-red-400 font-xl hover:underline cursor-pointer'>Login here</span></span>
                        </div>
                    </div>
                }
            </>
        );
    };

    export default LoginFrom