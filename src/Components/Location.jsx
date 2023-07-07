import React from 'react';

const Location = ({ setDivision }) => {

    const handelChangeDivision = e => {
        setDivision(e.target.value)      
    }
    return (
        <div>
            <select onChange={(e) => handelChangeDivision(e)} className='border border-gray-400 px-2 py-1 rounded-md shadow-md'>
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