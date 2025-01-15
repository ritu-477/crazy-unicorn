import React from 'react'

const Heading = ({ text, ClassStyle,classDesign }) => {
  return (
      <h2 className={`font-normal text-custom-6xl leading-custom-8xl text-black ${ClassStyle}`}>{text}
          {/* {<span><img src="/assets/images/png/heading-image.png" alt="heading-image" className={`w-[118.51px]  ${classDesign}`} /></span>} */}
      </h2>
  )
}

export default Heading