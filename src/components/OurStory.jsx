import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const OurStory = () => {
  return (
      <div className='relative max-2xl:pt-20 max-lg:pt-16 max-md:pt-14 max-sm:pt-16 xl:pb-[106px] lg:pb-[70px] md:pb-16 pb-6 pt-24' id='story'>
          <div className='absolute left-0 2xl:top-[-270px] top-0 -z-10 xl:block hidden'><img className='2xl:max-w-[370px] xl:max-w-[200px] max-w-[100px]' src="/assets/images/png/our-story-left-ellipse.png" alt="left-ellipse" /></div>
      <div className='container max-w-[1360px] mx-auto'>
        <div className='relative max-w-max flex justify-center items-center mx-auto'>
          <Heading ClassStyle="text-center" text="Our Story" />
        </div>
           <Description ClassStyle={'max-w-[1109px] text-center mx-auto lg:pt-[22px] pt-4'} text={'Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante.'} />
              <Description ClassStyle={'max-w-[953px] mx-auto text-center'} text={'Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas.'} />
          </div>
    </div>
  )
}

export default OurStory