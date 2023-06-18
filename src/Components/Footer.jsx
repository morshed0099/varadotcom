import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img className='w-full h-[680px] lg:h-[350px]' src="https://a0.muscache.com/pictures/0b04b300-9666-4899-b0fe-6bc2bdbdc1a1.jpg" alt="" />
        <div className='bg-black absolute bg-opacity-75 top-0 w-full h-full'></div>
        <div className=' absolute flex flex-col lg:flex-row px-4 w-full top-20 justify-around lg:items-center'>
          <div>
            <h2 className='text-white text-4xl font-bol duration-500 ease-in hover:text-green-700 font-bold'><i>VaraDotCom</i></h2>
            <p className='text-1xl font-semibold  pb-4 text-green-400'>Catch Your Dream</p>
            <div className='w-full h-[3px] bg-white'></div>
            <div className='flex flex-col '>
              <p className='text-1xl font-bold  text-white'><i>Our Head Office</i></p>
              <p className='flex flex-col'>
                <span className='text-white font-semibold mb-0'><i>Phone: +8801991394353</i></span>
                <span className='text-white font-semibold mb-0'><i>
                  email: mdgolammorshed0099@gmail.com</i> </span>
                <span className='text-white font-semibold mb-0'><i>
                  Dhaka,Bangladesh </i></span>
              </p>

            </div>
          </div>
          <div>
            <h1 className=' text-white font-bold pb-4 mt-4 text-4xl'><i>Quick Link</i></h1>

            <div className='w-full h-[3px] bg-white'></div>
            <div className='flex flex-col text-white font-semibold  gap-4'>
              <div className='flex gap-4 '>
                <NavLink className='hover:text-green-700 hover:translate-x-1 duration-700 ease-in' to='/'>Home</NavLink>
                <NavLink className='hover:text-green-700 hover:translate-x-1 duration-700 ease-in' to='/login'>Login</NavLink>
              </div>
              <div className='relative lg:mb-0 mb-4'>
                <input  type="text" className='py-3 pr-2 w-full pl-[110px] text-black border-none rounded-full' />
                  <button className='px-4 rounded-full absolute overflow-hidden left-0 top-0 py-3 bg-green-800 text-white font-bold'>Subscribe</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className='text-4xl font-bold text-white pb-2 lg:mt-2'><i>Follow Us</i></h2>
              <div className='w-full h-[3px] bg-white'></div>
              <div className='flex gap-4 justify-start lg:justify-center'>
                <FaFacebook className='text-white text-3xl duration-700 ease-in hover:text-green-800 mt-2' />
                <FaTwitter className='text-white duration-700 ease-in text-3xl hover:text-green-800 mt-2' />
                <FaYoutube className='text-white duration-1000 ease-in text-3xl hover:text-green-800 mt-2' />
              </div>
              <p className='text-white mt-2 pb-4 lg:text-center hover:text-green-700 hover:translate-x-1 duration-500 ease-in'><i>24/7 respone </i></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;