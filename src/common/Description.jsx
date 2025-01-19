import React from 'react'

const Description = ({ text, classStyle }) => {
  return (
      <p className={`font-comic-neue font-normal lg:text-custom-2xl text-base lg:leading-custom-5xl text-black ${classStyle}`}>{text}
      </p>
  )
}

export default Description