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
        autoPaly: true,
        duration: 500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    width: "100px"
                }}
            >
                <ul className='li' style={{ display: "flex", flexDirection: "column", gap: "7px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='active-li'
                style={{
                    width: "30px",
                    color: "blue",
                    border: "1px blue solid"
                }}
            >
                {i + 1}
            </div>
        )


    };
    return (
        <div className='p-4 main'>
            <Slider  {...settings}>
                <div>
                    <div className='relative'>
                        <img width='100%' className='h-[100vh] object-cover ' src="https://homeandhousereviews.com/wp-content/uploads/2020/03/Cheap-One-Bedroom-Apartments-For-Rent-Near-Me-1536x1024.jpg" alt="" />
                        <div className='absolute py-2 flex flex-col justify-center items-center w-full  top-1/2 bg-opacity-75 my-auto bg-green-800 '>
                            <div className='p-4 '>
                                <h2 className='text-white text-2xl  font-bold px-4'>6 Bed Room And 3 Washroom </h2>
                                <p className='text-gray-300  text-center font-bold text-1xl'>Monthly Rent $6000 . You have must advance 3 month and notice period 1 month</p>
                            </div>
                            <div>
                                <Link to={`/details/${id}`}> <button className='px-8 py-2 bg-red-900 rounded-lg shadow-md text-white hover:bg-red-700'>Detalis</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <img width='100%' className='h-[100vh] object-cover ' src="https://a0.muscache.com/pictures/0b04b300-9666-4899-b0fe-6bc2bdbdc1a1.jpg" alt="" />
                    <div className='absolute bg-opacity-75 py-2 flex flex-col justify-center items-center w-full bottom-1/4  my-auto bg-green-800 '>
                        <div className='p-4 '>
                            <h2 className='text-white text-2xl  font-bold px-4'>2 Bed Room And 1 Washroom </h2>
                            <p className='text-gray-300  text-center font-bold text-1xl'>Monthly Rent $1000 . You have must advance 3 month and notice period 1 month</p>
                        </div>
                        <div>
                            <Link to={`/details/${id}`}> <button className='px-8 py-2 bg-red-900 rounded-lg shadow-md text-white hover:bg-red-700'>Detalis</button></Link>
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <img width='100%' className='h-[100vh] object-cover ' src="https://i.pinimg.com/originals/37/af/df/37afdf55b42966be547a6b5270aaa876.jpg" alt="" />
                    <div className='absolute py-2 flex flex-col justify-center items-center w-full top-1/2 bg-green-800 bg-opacity-75  my-auto '>
                        <div className='p-4 '>
                            <h2 className='text-white text-2xl  font-bold px-4'>4 Bed Room And 2 Washroom </h2>
                            <p className='text-gray-300  text-center font-bold text-1xl'>Monthly Rent $3000 . You have must advance 3 month and notice period 1 month</p>
                        </div>
                        <div>
                            <Link to={`/details/${id}`}> <button className='px-8 py-2 bg-red-900 rounded-lg shadow-md text-white hover:bg-red-700'>Detalis</button></Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}



export default Bannar;