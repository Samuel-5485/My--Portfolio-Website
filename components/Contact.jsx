import { assets } from '@/assets/assets';
import React, { useState } from 'react'
import Image from 'next/image';

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "eac42afe-5581-46eb-8958-a0a98f1b8a31");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
            <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>Connect with me</h4>
            <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>Get in touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
                I&apos;d love to hear from you! If you have any questions, comments, or feedback
                please use the form below.
            </p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type='text' placeholder='Enter your name' required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/30
                    rounded-md bg-white dark:bg-darkHover dark:text-white dark:placeholder-gray-400' name='name' />
                    <input type='email' placeholder='Enter your email' required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/30
                    rounded-md bg-white dark:bg-darkHover dark:text-white dark:placeholder-gray-400' name='email' />
                </div>
                <textarea rows='6' placeholder='Enter your message' required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-white/30
                    rounded-md bg-white dark:bg-darkHover dark:text-white dark:placeholder-gray-400 mb-6' name='message'></textarea>
                <button type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-white/90
                text-white dark:text-black rounded-full mx-auto hover:bg-black dark:hover:bg-white duration-500
                '>Submit now<Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4 dark:invert' /></button>
                <p className='mt-4 text-center text-gray-700 dark:text-gray-300'>{result}</p>
            </form>
        </div>
    )
}

export default Contact;
