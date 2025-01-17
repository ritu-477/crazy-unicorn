import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-center bg-no-repeat relative overflow-hidden max-w-[1920px] mx-auto" id='home'>
                <Header />
            <img
                src="/assets/images/webp/hero-left-star.webp"
                alt="starImg"
                className="absolute left-0 sm:w-[200px] xl:w-[350px] md:w-[265px] w-[90px] star-animation top-[190px] max-md:top-20 pointer-events-none"
            />
            <img
                src="/assets/images/webp/hero-right-star.webp"
                alt="starImg"
                className="absolute right-0 w-[200px] sm:w-[250px] md:w-[290px] xl:w-[390px] bottom-0 z-30 star-animation max-sm:hidden pointer-events-none"
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
                        className="w-full max-w-[1264px] mx-auto relative pointer-events-none"
                    />
                    <img data-aos="zoom-in"
                        src="/assets/images/png/hero-unicorn-img.png"
                        alt="horse-img"
                        className="absolute w-full max-w-[600px] max-md:max-w-[400px] max-lg:max-w-[450px] pointer-events-none max-sm:h-[101px] xl:h-[258px] max-xlg:h-[230px] max-lg:h-[200px] max-md:h-[170px] max-sm:max-w-[200px] z-30 h-[288px] bottom-[23%] max-md:bottom-[16%]
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
