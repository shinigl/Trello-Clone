import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#1d2125] w-100 h-12 border-b p-3 border-b-[#9fadbc29] bordered-box flex flex-row justify-between'>
        <div className='left flex justify-center items-center'>
            <h3 className='text-slate-50'>Trello</h3>
        </div>
<div className="right flex items-center space-x-4">
    <span></span>
    <img className='rounded-full' src="https://placehold.co/28x28/png" alt="" />
</div>
        </div>
    );
}

export default Header;

