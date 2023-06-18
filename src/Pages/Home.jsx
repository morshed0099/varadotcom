import React from 'react';
import Bannar from '../Components/Bannar';
import Location from '../Components/Location';
import Calender from '../Components/Calender';
import RentRange from '../Components/RentRange';
import HomeRent from '../Components/HomeRent';
import SearchBar from '../Components/SearchBar';
import HotDeal from '../Components/HotDeal';
import Disclaimer from '../Components/Disclaimer';
import TrustedDeveloper from '../Components/TrustedDeveloper';


const Home = () => {
    return (
        <div className=''>
            <div className='mx-auto mb-30 '>
                <Bannar />
            </div>
            <div className='max-w-[1480px] mx-auto'>
                <div className='px-4 mt-6 z-40 sticky top-20 '>
                    <div className='flex justify-end items-center gap-4'>
                        <SearchBar />
                        <Location />
                        <Calender />
                        <RentRange />
                    </div>
                </div>
                <div className='px-4 gap-6 grid grid-cols-1 mt-6  md:grid-cols-2 lg:grid-cols-3'>
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                    <HomeRent />
                </div>

                <div className='px-4'>
                    <Disclaimer />
                </div>
                <div className='px-4'>
                    <h2 className='mt-6 mb-2 text-center text-3xl font-bold'>Hot Deals</h2>
                    <HotDeal />
                </div>
                <div className='px-4'>
                    <h2 className='mt-8 mb-6 text-center text-3xl  font-bold'>Trusted Developer</h2>
                    <div className='flex  lg:flex-row flex-col gap-4 my-4'>
                        <TrustedDeveloper />
                        <TrustedDeveloper />
                        <TrustedDeveloper />
                        <TrustedDeveloper />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;