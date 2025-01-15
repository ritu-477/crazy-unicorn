import React,{useState} from 'react'
import Heading from '../common/Heading'
import { FREQUENTLY_ASK_QUESTIONS_LIST } from '../utils/helper'

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className='bg-pink-300 pt-[106px] pb-[133px]'>
      <div className='container'>
        <Heading text={'FAQs'} ClassStyle={'text-center'}/>
        {
          FREQUENTLY_ASK_QUESTIONS_LIST.map((item, index) => (
            <div key={index} className="max-w-[1187px] mx-auto">
              <div className={`mb-[35px] ${openAccordion === index
                ? "faq-gradient-border"
                : "border-white border-opacity-10"
                }`}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`font-normal text-custom-5xl leading-custom-7xl text-black flex justify-between w-full uppercase ${openAccordion === index ? "" : ""}`}
                >
                  {item.question}
                  <img
                    src="/assets/images/svg/faq-arrow.svg"
                    alt={openAccordion === index ? "Collapse" : "Expand"}
                    className={`w-6 h-[13.71px] transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                      }`} />
                </button>
                <div
                  className={`transition-all duration-700 ease-in-out overflow-auto ${openAccordion === index
                    ? "max-sm:h-[150px] opacity-100"
                    : "max-h-0 opacity-0"
                    }`}>
                  <div className="transition-all duration-700 ease-in-out">
                    {item.answer && <p className=" font-normal text-custom-2xl leading-custom-5xl text-black max-w-[831px] pt-[10px] pb-5 border-b border-b-black border-opacity-30">{item.answer}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Faqs