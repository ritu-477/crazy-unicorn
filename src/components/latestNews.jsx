import React, { useState } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

const LatestNews = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ix25dr9',
      'template_ohy6dpx',
      e.target,
      'nzZC9f1fhink2qm3L'
    ).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          title: "Done",
          text: "Event has been successfully sent!",
          icon: "success",
          button: "OK",
        });
        setEmail("");
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          title: "Error",
          text: "There was an issue sending the event. Please try again.",
          icon: "error",
          button: "OK",
        });
      }
    );
  };
  return (
    <div className='container'>
      <div className='relative max-w-max flex items-center text-center mx-auto'>
        <Heading text={'Sign up for the latest news'} ClassStyle={'text-center'} />
      </div>
      <Description text={'Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit.'} ClassStyle={'max-w-[659px] text-center mx-auto pb-[33px]'} />
      <div className='text-center mx-auto bg-gradient-to-tr from-pink to-purple p-[1px] max-w-[521px] rounded-[10px] w-full'>
        <form onSubmit={handleSubmit} className='flex bg-white p-[8px_9.33px_8px_19px] justify-between max-w-[521px] rounded-[10px] w-full'>
          <div className='flex items-center w-full pr-2'>
            <img src="/assets/images/svg/email-box.svg" alt="email-box" />
            <input
              type="email"
              name="email"
              placeholder='Your email'
              required='required'
              value={email}
              onChange={handleChange}
              className="outline-none font-comic-neue text-black !lowercase pl-[9px] w-full opacity-70 placeholder:text-black placeholder:opacity-70"
            />
        </div>
          <button className=''>
            Subscribe
          </button>
        </form>
      </div>
      </div>
  )
}

export default LatestNews