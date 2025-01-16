import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'

const AboutUs = () => {
    return (
        <div className='xl:pt-[70px] lg:pt-20 xl:pb-[115px] lg:pb-24 md:py-16 py-6 relative max-w-[1920px] mx-auto' id='about'>
            <img className='absolute top-[-160px] lg:block hidden right-0 pointer-events-none' src="/assets/images/png/about-us-right-ellipse.png" alt="right-ellipse" />
            <div className='container max-w-[1360px] mx-auto'>
                <div className="xl:flex-row justify-center xl:justify-between flex flex-col items-center w-full xl:gap-[83px] gap-10">
                    <div data-aos="fade-right" className="xl:w-[661px] w-full">
                        <img className='max-w-[661px] pointer-events-none xl:h-[760px] w-full mx-auto' src="/assets/images/webp/about-us-horse.webp" alt="horse-group-img" />
                    </div>
                    <div data-aos="fade-left" className="xl:w-[576px] w-full max-sm:mt-10 max-xl:mt-20 flex xl:h-[650px] max-xl:justify-center">
                        <div className="max-w-[576px] w-full flex flex-col xl:justify-end justify-center">
                            <div className='relative max-w-max flex max-xl:mx-auto xl:mb-6 lg:mb-5 mb-4'>
                                <Heading ClassStyle="max-lg:text-center" text="About Us" />
                            </div>
                            <Description ClassStyle="xl:max-w-[576px] w-full max-xl:!text-center !mb-[10px] max-xl:mx-auto" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
                            <Description ClassStyle='max-xl:!text-center' text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
                            <div className="border-linear-gradient max-w-max rounded-xl ml-2 max-xl:mx-auto lg:mt-[53px] md:mt-10 mt-8">
                                <CustomButton classStyle="uppercase !py-[17px] !px-[44px]" text='mint now' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default AboutUs