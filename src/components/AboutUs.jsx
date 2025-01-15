// import React from 'react'
// import Heading from '../common/Heading'
// import Description from '../common/Description'

// const AboutUs = () => {
//   return (
//       <div className='xl:pt-[106px] lg:pt-20 md:pt-16 py-12'>
//           <div className='container'>
//               <div className='flex'>
//                   <div className='lg:w-[661px] w-full'>
//                       <img className='max-w-[661px] w-full' src="/assets/images/webp/about-us-horse.webp" alt="about-horse" />
//                   </div>
//                   <div>
//                       <Heading text={'About Us'} />
//                       <Description ClassStyle={'max-w-[576px]'} text={'Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. '} />
//                   </div>
//               </div>
//           </div>
          
//     </div>
//   )
// }

// export default AboutUs

import React from 'react'
import Heading from '../common/Heading'
// import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'

const AboutUs = () => {
    return (
        <div className='container mx-auto lg:mb-[231px] mb-40 max-2xl:px-4'>
            <div className="xl:flex-row justify-center xl:justify-between flex flex-col items-center w-full xl:gap-[83px] gap-10">
                <div className="xl:w-[661px] w-full">
                    <img className='max-w-[661px] xl:h-[760px] w-full mx-auto' src="/assets/images/webp/about-us-horse.webp" alt="horse-group-img" />
                </div>
                <div className="xl:w-[576px] w-full max-xl:mt-20 flex xl:h-[650px] max-xl:justify-center">
                    <div className="max-w-[576px] w-full flex flex-col xl:justify-end justify-center">
                        <div className='relative max-w-max flex max-xl:mx-auto xl:mb-6 lg:mb-5 mb-4'>
                            <Heading ClassStyle="max-lg:text-center" text="About Us" />
                        </div>
                        <Description ClassStyle="xl:max-w-[576px] w-full !max-xl:text-center !mb-[10px]" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
                        <Description ClassStyle='max-xl:!text-center' text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
                        <div className="border-linear-gradient max-w-max rounded-xl ml-2 max-xl:mx-auto lg:mt-[53px] md:mt-10 mt-8">
                            <CustomButton ClassStyle="uppercase md:-translate-x-2 -translate-x-1 md:-translate-y-2 -translate-y-1 !bg-white" text='mint now' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs