import React from 'react'

const Heading = ({ text, ClassStyle}) => {
    return (
        <h2
            className={`relative main-heading font-normal md:text-6xl text-4xl xl:text-custom-6xl xl:leading-custom-8xl text-black ${ClassStyle}`}>{text}
            <img
                src="/assets/images/png/heading-image.png"
                alt="unicorn"
                className="absolute sm:h-[84px] sm:w-[118px] w-20 h-12 lg:-right-12 sm:-top-[58px] -right-2 -top-10 pointer-events-none"
            />
        </h2>
  )
}

export default Heading