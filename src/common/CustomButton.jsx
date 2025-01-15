import React from 'react';

const CustomButton = ({ text, classStyle }) => {
    return (
        <div className='border-linear-gradient max-w-max rounded-xl relative'>
            <button
                className={`${classStyle} text-pink font-normal text-xl bg-white border-2 lg:text-custom-4xl lg:leading-custom-6xl text-custom-3xl leading-8 border-black rounded-lg px-12 py-[17px] shadow-[5px_5px_0px_#d000d0] hover:scale-110 transition-transform`}
            >
                {text}
            </button>
       </div>
    );
};

export default CustomButton; 

