import React from 'react'

const Description = ({ text, ClassStyle }) => {
  return (
      <p className={`font-comic-neue font-normal lg:text-custom-2xl text-base lg:leading-custom-5xl text-black ${ClassStyle}`}>{text}
      </p>
  )
}

export default Description