import React from 'react'
import { SOCIAL_LINKS } from '../utils/helper'

const Footer = () => {
    return (
        <div data-aos="fade-up" className='relative max-w-[1920px] mx-auto'>
            <img className='absolute bottom-0 w-full left-0 -z-[1] xl:h-[650px] h-[290px] sm:h-[300px] md:h-[335px] lg:h-[500px] pointer-events-none' src="/assets/images/png/cloud-img.png" alt="cloud-image" />
            <img className='absolute right-0 xl:-top-[130px] top-0 xl:max-w-[550px] w-full md:max-w-[300px] max-w-[130px] -z-[2] pointer-events-none' src="/assets/images/png/footer-rainbow.png" alt="rainbow-image" />
            <img className='absolute left-0 bottom-0 xl:max-w-[600px] max-w-[150px] sm:max-w-[250px] lg:max-w-[300px] w-full pointer-events-none star-animation' src="/assets/images/png/footer-ellipse.png" alt="footer-ellipse" />
            <div className='container relative z-10'>
                <div className='xl:pt-[144px] lg:pt-32 md:pt-24 sm:pt-16 pt-12 mx-auto flex justify-center items-center'>
                    <a href='/'>
                        <img
                            src="/assets/images/png/footer-logo.png"
                            alt='footer-logo'
                            className='lg:w-[172px] lg:h-[180px] w-[100px] h-[108px] pointer-events-none'
                        />
                    </a>
                </div>
                <div className='flex items-center gap-[21px] justify-center lg:pt-[60px] pt-8'>
                    {SOCIAL_LINKS.map((obj, index) => (
                        <a
                            key={index}
                            className="hover:transition-all hover:duration-700 hover:scale-110 text-custom-2xl leading-custom-2x border border-black size-[42.08px] rounded-full flex justify-center items-center"
                            href={obj.link}
                            target='_blank'
                        >
                            {obj.icon}
                        </a>
                    ))}
                </div>
                <p className='text-center text-xl leading-custom-xl font-comic-neue opacity-70 xl:py-[63px] py-8'>
                    Copyright@CrazyUnicorn.com
                </p>
               </div>
            </div>
      
    )
}

export default Footer