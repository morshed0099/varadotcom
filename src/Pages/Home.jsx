import React, { useState } from 'react';
import Bannar from '../Components/Bannar';
import Location from '../Components/Location';
import Calender from '../Components/Calender';
import RentRange from '../Components/RentRange';
import HomeRent from '../Components/HomeRent';
import SearchBar from '../Components/SearchBar';
import HotDeal from '../Components/HotDeal';
import Disclaimer from '../Components/Disclaimer';
import TrustedDeveloper from '../Components/TrustedDeveloper';
import { useQuery } from 'react-query';


const Home = () => {

    const [rentRange1, setRentRange1] = useState(null)
    const [rentRange2, setRentRange2] = useState(null)
    const [division, setDivision] = useState(null)
    // const [filteredResults, setFilteredResults] = useState([]);
    // const [searchInput, setSearchInput] = useState('');


    const { data: adHomeRent = [],isLoading} = useQuery({
        queryKey: ["adHomeRent", division],
        queryFn: async () => {
            const res = await fetch(`https://varadotcom-server.vercel.app/publishrent?division=${division}`)
            const data = await res.json()
            return data

        }
    })
    console.log(adHomeRent, '');
    const rateRange = adHomeRent?.filter(rents => rents.rent >= rentRange1 && rents.rent <= rentRange2)

    console.log(rateRange, '35');
    // const searchItems = (value) => {
    //     setSearchInput(value)
    //     if (searchInput !== '') {
    //         const filteredData = adHomeRent.filter((item) => {
    //             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    //         })
    //         setFilteredResults(filteredData)
    //     }
    //     else {
    //         setFilteredResults(adHomeRent)
    //     }
    // }

    return (
        <div className=''>
            <div className='mx-auto mb-30 '>
                <Bannar />
            </div>
            <div className='max-w-[1480px] mx-auto'>
                <h1 className='text-center text-6xl font-bold  pt-8  pb-4'>Select Your Sweet Home</h1>
                <div className='p-4 mt-6 z-40 sticky top-20 '>
                    <div className='overflow-auto'>
                        <div className='justify-end  items-center flex gap-4'>
                            {/* < SearchBar searchItems={searchItems} /> */}
                            <Location setDivision={setDivision} />
                            <RentRange setRentRange1={setRentRange1} setRentRange2={setRentRange2} />
                        </div>
                    </div>
                </div>
                <div className='px-4 gap-6 grid grid-cols-1 mt-6  md:grid-cols-2 lg:grid-cols-3'>

             

                    {

                        rentRange1 ? rateRange.map(rents =>
                            <HomeRent rents={rents}

                                key={rents._id} />
                        ) : adHomeRent.map(rents =>
                            <HomeRent rents={rents}

                                key={rents._id} />
                        )
                    }

                    {/* {
                        searchInput.length > 1 ? filteredResults.map(rents =>
                            <HomeRent rents={rents}
                                key={rents._id} />) :
                            adHomeRent.map(rents => <HomeRent
                                rents={rents}
                                key={rents._id} />)
                    } */}

                </div>
                <div>
                {
                    isLoading && <div className='text-3xl flex justify-center font-bold text-red-600'>  Loading... </div>
                }
                    {
                        rentRange1 && rateRange.length === 0 && <div> <h1 className='text-center mt-12 font-bold text-2xl text-red-800'>no data match</h1> </div>
                    }
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