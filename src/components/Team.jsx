// import React from 'react'
// import Heading from '../common/Heading'

// const Team = () => {
//   return (
//     <div className='pt-10 pb-[73.5px]'>
//       <div className='container max-w-[1361px] mx-auto'>
//         <div className='relative max-w-max flex justify-center items-center mx-auto'>
//           <Heading ClassStyle="text-center" text="Team" />
//         </div>

//         </div>
//     </div>
//   )
// }

// export default Team

import React from 'react'
import Heading from '../common/Heading'
import { TEAM_DATA_LIST } from '../utils/helper'

const Team = () => {
  return (
    <div data-aos="zoom-out" className='xl:pt-[100px] pb-[73.5px] pt-10 relative' id='team'>
      <img className='absolute top-[-160px] lg:block hidden right-0' src="/assets/images/png/about-us-right-ellipse.png" alt="right-ellipse" />
      <div className='max-w-[1360px] mx-auto container'>
        <div className='relative max-w-max flex justify-center items-center mx-auto'>
              <Heading ClassStyle="text-center" text="Team" />
          </div>
        <div className='flex gap-[23.64px] max-xl:flex-wrap justify-center items-center pt-[190px] max-lg:pt-20 max-xl:gap-10'>
          {TEAM_DATA_LIST.map((obj, i) => (
            <div
              className='2xl:max-w-[424px] max-w-[400px] rounded-[25px] group transition-all duration-500 text-center bg-white/80  backdrop-blur-[164.191px] linear-border group cursor-pointer origin-bottom w-full'
              key={i}
            >
              <div className='justify-center items-center flex flex-col rounded-[25px]'>
                <img
                  className='pointer-events-none lg:max-w-[312px] sm:max-w-[250px] max-w-[200px] w-full -mt-5 max-sm:mx-auto sm:-mt-9 group-hover:scale-[1.20] origin-bottom transition-all duration-300'
                  src={obj.image}
                  alt='team-image'
                  width={312}
                  height={408.16}
                />
                <h3 className='text-center text-custom-3xl leading-8 lg:text-custom-5xl lg:leading-custom-7xl pb-[13px] lg:pt-7 pt-5'>
                  {obj.title}
                </h3>
                <p className='text-center text-custom-2xl leading-custom-5xl font-comic-neue'>
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team