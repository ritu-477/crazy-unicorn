import React from 'react'

const Heading = ({ text, ClassStyle}) => {
    return (
        <h2
            className={`relative font-normal md:text-7xl text-4xl xl:text-custom-6xl xl:leading-custom-8xl text-black ${ClassStyle}`}>{text}
            <img
                src="/assets/images/png/heading-image.png"
                alt="unicorn"
                className="absolute h-[84px] w-[118px] -right-12 -top-[58px]"
            />
        </h2>
  )
}

export default Heading