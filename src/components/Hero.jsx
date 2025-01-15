import React from 'react'
import Heading from '../common/Heading'
import Header from './Header'

const Hero = () => {
  return (
      <div className='bg-hero bg-cover bg-center bg-no-repeat relative 2xl:h-[1085px]'>
          <Header />
          <div className='absolute left-0 top-[23%]'><img className='w-full 2xl:max-w-[342px] xl:max-w-[300px] lg:max-w-[210px] md:max-w-[160px] max-w-[90px]' src="/assets/images/webp/hero-left-star.webp" alt="left-start" /></div>
          <div className='absolute right-0 top-[48%]'><img className='w-full 2xl:max-w-[480px] xl:max-w-[260px] lg:max-w-[160px] md:max-w-[131px] sm:max-w-[100px] max-w-[65px]' src="/assets/images/webp/hero-right-star.webp" alt="left-start" /></div>
          <div className='container'>
              <div className='mx-auto max-w-[1264.24px] xl:pt-[165.13px] lg:pt-36 md:pt-24 sm:pt-16 pt-12'>
                  <img className='mx-auto max-w-[1264.24px] w-full' src="/assets/images/webp/hero-horse-image.webp" alt="her0-image" />
              </div>
          </div>
      </div>
  )
}

export default Hero