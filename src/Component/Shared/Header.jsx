import React from 'react';

const Header = ({beforeBr,afterBr,yellowText}) => {
    return (
        <div>
            <div className="">
                <h1 className='text-4xl font-extrabold'>
                    <span>{beforeBr}</span>
                    <br />
                    <span>{afterBr}</span>
                    <span className='text-[#FBDE70]'>{yellowText}</span>
                </h1>
            </div>
        </div>      
    );
};

export default Header;