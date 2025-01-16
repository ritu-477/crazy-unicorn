import React from 'react'

const Heading = ({ text, ClassStyle}) => {
    return (
        <h2
            className={`relative font-normal md:text-7xl text-4xl xl:text-custom-6xl xl:leading-custom-8xl text-black ${ClassStyle}`}>{text}
            <img
                src="/assets/images/png/heading-image.png"
                alt="unicorn"
                className="absolute sm:h-[84px] sm:w-[118px] w-20 h-12 sm:-right-12 sm:sm:-top-[58px] -top-10 -right-10"
            />
        </h2>
  )
}

export default Heading