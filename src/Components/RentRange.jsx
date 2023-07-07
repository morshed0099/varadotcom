import React from 'react';

const RentRange = ({ setRentRange1, setRentRange2 }) => {
    const handelReate = e => {
        const ret = (e.target.value)
        const newret = ret.split('-')
        setRentRange1(parseInt(newret[0]))
        setRentRange2(parseInt(newret[1]))
    }
    return (
        <div>
            <select onChange={(e) => handelReate(e)} className='border px-2 py-1 border-gray-400 rounded-md shadow-md'>
                <option disabled selected>You Rent Range</option>
                <option >10000-15000</option>
                <option >20000-35000</option>
                <option >400000-60000</option>
            </select>
        </div>
    );
};

export default RentRange;