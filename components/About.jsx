import React from "react";
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from "next/image";

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
            <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 mt-20'>
            <div className="relative group">

<Image 
    src={assets.about_image}
    alt="about"
    className="
    w-64 rounded-2xl
    transition duration-500
    group-hover:-translate-y-3
    group-hover:shadow-2xl
    "
/>

</div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300'>I am an experienced developer with a passion for creating innovative solutions.
                        I have had the privilege of working with various technologies and teams to bring ideas to life.</p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description },
                            index) => (
                            <li className='border-[0.5px] border-gray-400 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover
                                hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-xl font-semibold text-gray-800 dark:text-white'>Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-white/30 rounded-lg cursor-pointer
                            hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default About;
