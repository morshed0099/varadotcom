import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const Bannar = () => {
    const id = '02'
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,    
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className='w-full pb-4 overflow-hidden'>
            <Slider className=''  {...settings}>
                <div>
                    <div className='relative'>
                        <img width='100%' className='h-[100vh] object-cover ' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                        <div className='absolute py-2 flex flex-col justify-center gap-4 items-center w-full  top-0 h-full bg-opacity-75 my-auto bg-black'>
                            <div className='p-4 '>
                                <p className='text-gray-100 mb-12  text-center font-bold text-2xl'>Monthly Rent $2000 . You have must advance 3 month and notice period 1 month</p>
                                <h2 className='text-white text-6xl mb-8 text-center  font-bold px-4'>2 Bed Room And 1 Washroom </h2>
                            </div>
                            <div>
                                <Link to={`/details/${id}`}> <button className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>View Dtails</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <img width='100%' className='h-[100vh] object-cover ' src="https://a0.muscache.com/pictures/0b04b300-9666-4899-b0fe-6bc2bdbdc1a1.jpg" alt="" />
                    <div className='absolute py-2 flex flex-col justify-center gap-4 items-center w-full  top-0 h-full bg-opacity-75 my-auto bg-black'>
                        <div className='p-4 '>
                            <p className='text-gray-100 mb-12  text-center font-bold text-2xl'>Monthly Rent $3000 . You have must advance 3 month and notice period 1 month</p>
                            <h2 className='text-white text-6xl mb-8 text-center  font-bold px-4'>4 Bed Room And 2 Washroom </h2>
                        </div>
                        <div>
                            <Link to={`/details/${id}`}> <button className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>View Dtails</button></Link>
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <img width='100%' className='h-[100vh] object-cover ' src="https://i.pinimg.com/originals/37/af/df/37afdf55b42966be547a6b5270aaa876.jpg" alt="" />
                    <div className='absolute py-2 flex flex-col justify-center gap-4 items-center w-full  top-0 h-full bg-opacity-75 my-auto bg-black'>
                        <div className='p-4 '>
                            <p className='text-gray-100 mb-12  text-center font-bold text-2xl'>Monthly Rent $6000 . You have must advance 3 month and notice period 1 month</p>
                            <h2 className='text-white text-6xl mb-8 text-center  font-bold px-4'>6 Bed Room And 3 Washroom </h2>
                        </div>
                        <div>
                            <Link to={`/details/${id}`}> <button className='px-20 py-4 text-2xl font-bold text-white border hover:bg-green-700 duration-1000  hover: ease-linear border-gray-600'>View Dtails</button></Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}



export default Bannar;