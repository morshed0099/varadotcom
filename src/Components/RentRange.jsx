import React from 'react';

const RentRange = () => {
    return (
        <div>
            <select className='border px-2 py-1 border-gray-400 rounded-md shadow-md'>
                <option disabled selected>You Rent Range</option>
                <option >10000-15000</option>
                <option >20000-35000</option>
                <option >400000-60000</option>
            </select>
        </div>
    );
};

export default RentRange;