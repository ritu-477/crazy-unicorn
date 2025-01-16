import React,{useState} from 'react'
import Heading from '../common/Heading'
import { FREQUENTLY_ASK_QUESTIONS_LIST } from '../utils/helper'

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div data-aos="zoom-out" className='xl:pt-[107px] lg:py-24 md:py-16 sm:py-10 py-6 xl:pb-[133px] relative max-w-[1920px] mx-auto' id='faq'>
      <img className='absolute lg:block hidden left-0 top-[-20%] 2xl:max-w-[370px] xl:max-w-[200px] max-w-[100px] w-full' src="/assets/images/png/our-story-left-ellipse.png" alt="left-ellipse" />
      <img className='absolute top-[32%] lg:block hidden right-0' src="/assets/images/png/about-us-right-ellipse.png" alt="right-ellipse" />
      <div className='container'>
        <div className='relative max-w-max flex items-center text-center mx-auto'>
          <Heading text={'FAQs'} ClassStyle={'text-center'} />
        </div>
        <div className='max-w-[1187px] mx-auto xl:pt-[88px] lg:pt-14 md:pt-10 pt-9'>
          {FREQUENTLY_ASK_QUESTIONS_LIST.map((item, index) => (
            <div key={index} className="">
              <div className={`lg:mb-[35px] md:mb-7 sm:mb-5 mb-4 ${openAccordion === index
                ? "faq-gradient-border"
                : "border-white border-opacity-10"
                }`}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`font-normal xl:text-custom-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl xl:leading-custom-7xl text-black flex justify-between items-center text-start w-full uppercase ${openAccordion === index ? "" : ""}`}
                >
                  {item.question}
                  <img
                    src="/assets/images/svg/faq-arrow.svg"
                    alt={openAccordion === index ? "Collapse" : "Expand"}
                    className={`lg:w-6 md:w-5 sm:w-4 w-3 h-[13.71px] ml-3 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                      }`} />
                </button>
                <div
                  className={`transition-all duration-700 ease-in-out overflow-auto ${openAccordion === index
                    ? "opacity-100"
                    : "max-h-0 opacity-0"
                    }`}>
                  <div className="transition-all duration-700 ease-in-out">
                    {item.answer && <p className="font-comic-neue font-normal xl:text-custom-2xl md:text-xl text-base xl:leading-custom-5xl text-black lg:max-w-[831px] max-w-[90%] pt-[10px] lg:pb-5 pb-4 border-b border-b-black border-opacity-30">{item.answer}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
       </div>
      </div>
    </div>
  )
}

export default Faqs