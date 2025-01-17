import React, { useState } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import CustomButton from '../common/CustomButton';

const NewsSignUp = () => {
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
        <div className='xl:pt-[132px] lg:pt-24 md:pt-20 pt-12 xl:pb-[143px] lg:pb-32 md:pb-24 sm:pt-16 pb-12 max-w-[1920px] mx-auto'>
            <div className='container'>
                <div data-aos="fade-right" className='relative max-w-max flex items-center text-center mx-auto'>
                    <Heading text={'Sign up for the latest news'} ClassStyle={'text-center'} />
                </div>
                <Description data-aos="fade-left" text={'Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit.'} ClassStyle={'max-w-[659px] text-center mx-auto pb-[33px]'} />
                <div data-aos="zoom-in" className='text-center mx-auto bg-gradient-to-tr from-pink to-purple p-[0.5px] max-w-[521px] rounded-[10px] w-full'>
                    <form onSubmit={handleSubmit} className='flex bg-white md:p-[8px_9.33px_8px_19px] p-2 justify-between max-w-[521px] rounded-[10px] w-full'>
                        <div className='flex items-center w-full pr-2'>
                            <img src="/assets/images/svg/email-box.svg" alt="email-box" />
                            <input
                                type="email"
                                name="email"
                                placeholder='Your email'
                                required='required'
                                value={email}
                                onChange={handleChange}
                                className="outline-none font-comic-neue text-black pl-[9px] w-full opacity-70 placeholder:text-black placeholder:opacity-70"
                            />
                        </div>
                        <CustomButton classStyle={'md:!px-[29px] !px-5 py-2 md:!py-[10px] md:!text-custom-3xl md:!leading-custom-3xl'} text={'Subscribe'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsSignUp