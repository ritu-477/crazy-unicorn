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
        <div className='max-w-[1320px] mx-auto lg:mb-[231px] mb-40 max-2xl:px-4'>
            <div className="flex justify-center xl:justify-between flex-wrap xl:items-end items-center">
                <div className="xl:w-6/12 w-full justify-center flex">
                    <img className='2xl:max-w-[661px] xl:max-w-lg max-w-md max-h-[693px] w-full' src="/assets/images/webp/about-us-horse.webp" alt="horse-group-img" />
                </div>
                <div className="xl:w-6/12 w-full max-xl:mt-20 flex xl:justify-end justify-center lg:items-end">
                    <div className="max-w-[576px] w-full">
                        <span className='relative max-w-max flex max-xl:mx-auto'>
                            <Heading classStyle="xl:mb-6 lg:mb-5 mb-4" text="About Us" />
                            {/* <img className='max-w-[118px] w-full absolute -right-12 -top-14' src={SmallHorseImg} alt="small-horse-img" /> */}
                        </span>
                        <Description classStyle="lg:mb-[10px] font-comic mb-2 lg:!max-w-none !w-full max-xl:!text-center" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
                        <Description classStyle='lg:mb-[53px] font-comic md:mb-9 mb-7 max-xl:!text-center' text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
                        <div className="border-linear-gradient max-w-max rounded-xl ml-2 max-xl:mx-auto">
                            <CustomButton classStyle="uppercase md:-translate-x-2 -translate-x-1 md:-translate-y-2 -translate-y-1 !bg-white" text='mint now' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs