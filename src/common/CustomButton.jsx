import React from 'react';

const CustomButton = ({ text, classStyle }) => {
    return (
        <button
            className={`${classStyle} text-pink-500 font-bold text-xl bg-white border-2 border-black rounded-lg px-8 py-4 shadow-[5px_5px_0px_#d000d0] hover:scale-110 transition-transform`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
