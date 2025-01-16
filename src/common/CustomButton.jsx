import React from 'react';

const CustomButton = ({ text, classStyle }) => {
    return (
        <div className='bg-gradient-to-r from-pink to-purple max-w-[233px] rounded-xl pb-1 pr-1 transition-transform duration-500 ease-in-out hover:scale-105'>
            <div className='bg-white rounded-xl border border-black -pl-1 -pt-1'>
                <button
                    className={`${classStyle} font-normal text-custom-3xl leading-8 sm:text-custom-4xl sm:leading-custom-6xl whitespace-nowrap text-gradient bg-white rounded-xl`}
                >
                    {text}
                </button>
            </div>
        </div>
    );
};

export default CustomButton;


