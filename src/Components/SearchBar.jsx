import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({searchItems}) => {
    return (
        <div className=''>
            <div className='flex relative '>
                <div className='absolute top-3 pl-2 focus:w-[600px] duration-1000 ease-in-out '>
                    <AiOutlineSearch />
                </div>
                <input onChange={(e)=>searchItems(e.target.value)} className='pl-8 py-2 rounded-md shadow-md ' placeholder='search here' type="serch" />
            </div>
        </div>
    );
};

export default SearchBar;