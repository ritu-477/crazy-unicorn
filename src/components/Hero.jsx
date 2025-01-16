// import React from 'react'
// import Header from './Header'

// const Hero = () => {
//   return (
//       <div className='bg-hero bg-cover bg-center bg-no-repeat relative 2xl:h-[1085px]'>
//           <Header />
//           <div className='absolute left-0 top-[23%]'><img className='w-full 2xl:max-w-[342px] xl:max-w-[300px] lg:max-w-[210px] md:max-w-[160px] max-w-[90px]' src="/assets/images/webp/hero-left-star.webp" alt="left-start" /></div>
//           <div className='absolute right-0 top-[48%]'><img className='w-full 2xl:max-w-[480px] xl:max-w-[260px] lg:max-w-[160px] md:max-w-[131px] sm:max-w-[100px] max-w-[65px]' src="/assets/images/webp/hero-right-star.webp" alt="left-start" /></div>
//           <div className='container'>
//               <div className='mx-auto max-w-[1264.24px] xl:pt-[165.13px] lg:pt-36 md:pt-24 sm:pt-16 pt-12'>
//                   <img className='mx-auto max-w-[1264.24px] w-full' src="/assets/images/webp/hero-horse-image.webp" alt="her0-image" />
//               </div>
//           </div>
//       </div>
//   )
// }

// export default Hero


import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-center bg-no-repeat relative overflow-hidden">
                <Header />
            <img
                src="/assets/images/webp/hero-left-star.webp"
                alt="starImg"
                className="absolute left-0 sm:w-[200px] md:w-[265px] w-[90px] star-animation top-[100px] max-md:top-20 pointer-events-none"
            />
            <img
                src="/assets/images/webp/hero-right-star.webp"
                alt="starImg"
                className="absolute right-0 w-[200px] sm:w-[250px] md:w-[390px] bottom-0 z-30 star-animation max-sm:hidden pointer-events-none"
            />
            <div className="relative pt-[165px] max-xlg:pt-[120px] max-lg:pt-20 max-md:pt-10">
                <img
                    src="/assets/images/png/cloud-img.png"
                    alt="cloud"
                    className="w-full absolute h-[150px] sm:h-[200px] md:h-[333px] bottom-0 pointer-events-none"
                />
                <div className="flex items-center justify-center flex-col relative">
                    <img
                        src="/assets/images/png/cloud-img.png"
                        alt="cloud"
                        className="w-full absolute h-[150px] sm:h-[200px] md:h-[333px] top-[25%] md:top-[29%] cloud-animation-right pointer-events-none"
                    />
                    <img
                        src="/assets/images/png/crazy-unicorn-hero-img.png"
                        alt="hero-img"
                        className="w-full sm:w-[90%] md:max-w-[1130px]  max-xlg:max-w-none relative pointer-events-none"
                    />
                    <img
                        src="/assets/images/png/hero-uniconrn-img.png"
                        alt="horse-img"
                        className="absolute w-full max-w-[600px] max-md:max-w-[400px] max-lg:max-w-[450px] pointer-events-none max-sm:h-[101px] max-customxl:h-[258px] max-xlg:h-[230px] max-lg:h-[200px] max-md:h-[170px] max-sm:max-w-[200px] z-30 h-[288px] bottom-[14%] max-md:bottom-[16%]
"
                    />
                    <img
                        src="/assets/images/png/cloud-img.png"
                        alt="cloud"
                        className="w-full absolute h-[150px] sm:h-[200px] md:h-[333px] bottom-0 cloud-animation pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero
