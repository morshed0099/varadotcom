import React from 'react';

const Location = () => {
    return (
        <div>
            <select className='border border-gray-400 px-2 py-1 rounded-md shadow-md'>
                <option selected disabled>Select Your Area</option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
                <option>Chittagong</option>
                <option>Shylet</option>
                <option>Rangpur</option>
                <option>Barisal</option>
            </select>
        </div>
    );
};

export default Location;