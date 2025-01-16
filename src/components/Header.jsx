import React from 'react';
import { NAV_DATA_LIST ,NAV_SOCIAL_LIST} from '../utils/helper';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {

    const toggleMenu = () => {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = !isMenuOpen ? "" : "hidden";
      }
      else {
        document.body.style.overflow = "";
      }
    }

    toggleMenu();
    window.removeEventListener("resize", toggleMenu);
    return () => {
      window.removeEventListener("resize", toggleMenu);
      document.body.style.overflow = "";
    }
  }, [isMenuOpen])

  return (
    <div className="sm:pt-[14px] max-sm:pt-4 flex items-center lg:h-[88.87px] h-14 relative">
      <div className="container max-w-[1368px] mx-auto">
        <div className="flex justify-between items-center lg:h-[88.87px] h-14">
          <a href="/">
            <img className='lg:max-w-[85.36px] lg:h-[88.87px] h-14 max-w-[60px] pointer-events-none' src="/assets/images/webp/nav-logo.webp" alt="nav-logo" />
          </a>
          <div className='lg:block hidden'>
            <div className="flex gap-[30px] items-center">
              {NAV_DATA_LIST.map((obj, index) => (
                <a
                  onClick={toggleMenu}
                  key={index}
                  className="font-normal text-border text-custom-2xl leading-custom-2xl text-black relative group"
                  href={obj.link}
                >
                  {obj.data}
                  <img
                    src="/assets/images/svg/underline-nav.svg"
                    alt="underline"
                    className="absolute left-0 bottom-[-7px] h-[9.94px] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-50 max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
          >
            {isMenuOpen ? (
              <>
                <span className="h-[3px] absolute top-3 w-full bg-black transform rotate-45 transition duration-300"></span>
                <span className="h-[3px] absolute top-3 w-full bg-black transform -rotate-45 transition duration-300"></span>
              </>
            ) : (
              <>
                <span className="h-[3px] w-full bg-black"></span>
                <span className="h-[3px] w-full bg-black"></span>
                <span className="h-[3px] w-full bg-black"></span>
              </>
            )}
          </div>
          <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-40 gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-white max-lg:flex-col max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
            <div className='lg:hidden block'>
              <div className='flex-col flex gap-6 items-center'>
                {NAV_DATA_LIST.map((obj, index) => (
                  <a onClick={toggleMenu}
                    key={index}
                    className="font-normal hover:transition-all hover:duration-500 text-base leading-5 text-black"
                    href={obj.link}>
                    {obj.data}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-5 items-center">
              {NAV_SOCIAL_LIST.map((obj, index) => (
                <a
                  onClick={toggleMenu}
                  key={index}
                  className="font-normal text-border text-custom-2xl leading-custom-2xl text-black relative group"
                  href={obj.link}
                >
                  {obj.data}
                  <img
                    src="/assets/images/svg/underline-nav.svg"
                    alt="underline"
                    className="absolute left-0 bottom-[-7px] h-[9.94px] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
