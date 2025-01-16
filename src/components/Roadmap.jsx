import React from 'react'
import Heading from '../common/Heading'

const Roadmap = () => {
  return (
    <div>
      <div className='container'>
        <div className='relative max-w-max flex items-center text-center mx-auto'>
          <Heading text={'RoadMap'} ClassStyle={'text-center pb-[117px]'} />
   </div>
        <div className='relative flex'>
          <img src="/assets/images/png/roadmap-image.png" alt="roadmap" className='2xl:max-w-[755px] xl:max-w-[570px] lg:max-w-[450px] md:max-w-[320px] max-w-[290px] w-full mx-auto sm:block hidden' />
          <div className='flex gap-1 w-9 h-[585px] left-1 relative sm:hidden mobile-rainbow'>
            <div className='absolute top-4 w-16'>
              <img src="/assets/images/png/musical-ellipse.png" alt="music" className='max-w-36 w-full' />
            </div>
            <div className='absolute top-[35%] w-16'>
              <img src="/assets/images/png/musical-ellipse.png" alt="music" className='max-w-36 w-full' />
            </div>
            <div className='absolute bottom-5 w-16'>
              <img src="/assets/images/png/musical-ellipse.png" alt="music" className='max-w-36 w-full' />
            </div>
            <div className='border-4 border-red w-1 h-full '></div>
            <div className='border-4 border-dark-yellow w-1 h-full '></div>
            <div className='border-4 border-yellow w-1 h-full '></div>
            <div className='border-4 border-green w-1 h-full '></div>
            <div className='border-4 border-sky-blue w-1 h-full '></div>
          </div>
          <div>
            <div className='sm:max-w-[451px] 2xl:w-1/2 xl:w-[31%] lg:w-[50%] md:w-[37%] sm:w-[36%] w-full left-0 sm:absolute xl:pt-[144px] lg:pt-24 sm:pt-16 pt-2 top-0 max-sm:pl-12 max-sm:pb-6 timeline-content'>
              <p className='font-normal lg:text-custom-5xl lg:leading-custom-7xl md:text-3xl sm:text-2xl text-base md:pb-4 pb-2 text-black'>Phase 1</p>
              <p className='font-comic-neue font-normal lg:text-custom-xl md:text-sm text-xs sm:leading-5 md:leading-6 lg:leading-custom-4xl 2xl:max-w-[465px] sm:max-w-[425px]'>Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed variu
                s loborti orbi sit sit magna lorem arcu.</p>
            </div>
            <div className='sm:max-w-[451px] 2xl:w-1/2 xl:w-[31%] lg:w-[50%] md:w-[37%] sm:w-[36%] w-full sm:absolute sm:right-0 top-[21%] sm:pb-[50px] max-sm:pl-12 lg:pl-24 xl:pl-0 max-sm:pb-6 timeline-content'>
              <p className='font-normal lg:text-custom-5xl lg:leading-custom-7xl md:text-3xl sm:text-2xl text-base md:text-black pb-2'>Phase 2</p>
              <p className='font-comic-neue font-normal lg:text-custom-xl md:text-sm text-xs sm:leading-5 md:leading-6 lg:leading-custom-4xl 2xl:max-w-[420px] sm:max-w-[425px]'>Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu.</p>
            </div>
            <div className='sm:max-w-[451px] 2xl:w-1/2 xl:w-[31%] lg:w-[50%] md:w-[37%] sm:w-[36%] w-full left-0 sm:absolute top-[35%] left max-sm:pl-12 max-sm:pb-6 timeline-content'>
              <p className='font-normal lg:text-custom-5xl lg:leading-custom-7xl md:text-3xl sm:text-2xl text-base md:pb-4 pb-2 text-black'>Phase 3</p>
              <p className='font-comic-neue font-normal lg:text-custom-xl md:text-sm text-xs sm:leading-5 md:leading-6 lg:leading-custom-4xl sm:max-w-[374px]'>Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu.</p>
            </div>
            <div className='sm:max-w-[451px] 2xl:w-1/2 xl:w-[31%] lg:w-[50%] md:w-[37%] sm:w-[36%] w-full sm:absolute sm:right-0 xl:top-[45%] sm:top-[47%] top-[55%] lg:pl-24 xl:pl-0 max-sm:pl-12 max-sm:pb-6 timeline-content'>
              <p className='font-normal lg:text-custom-5xl lg:leading-custom-7xl md:text-3xl sm:text-2xl text-base md:text-black pb-2'>Phase 4</p>
              <p className='font-comic-neue font-normal lg:text-custom-xl md:text-sm text-xs sm:leading-5 md:leading-6 lg:leading-custom-4xl sm:max-w-[420px]'>Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu.</p>
            </div>
            <div className='sm:max-w-[451px] 2xl:w-1/2 xl:w-[31%] lg:w-[50%] md:w-[37%] sm:w-[36%] w-full left-0 sm:absolute 2xl:bottom-[34%] sm:bottom-[21%] bottom-[6%] max-sm:pl-12 max-sm:pb-6 timeline-content'>
              <p className='font-normal lg:text-custom-5xl lg:leading-custom-7xl md:text-3xl sm:text-2xl text-base md:pb-4 pb-2 text-black'>Phase 5</p>
              <p className='font-comic-neue font-normal lg:text-custom-xl md:text-sm text-xs sm:leading-5 md:leading-6 lg:leading-custom-4xl sm:max-w-[374px] xl:pr-0 pr-5'>Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit.</p>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap