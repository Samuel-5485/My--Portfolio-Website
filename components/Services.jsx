import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = ({ isDarkMode }) => {
    return (
        <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

            <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
                What I offer
            </h4>

            <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>
                My Services
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
                I am frontend developer from Ethiopia in multiple freelancer like Upwork, Fiverr.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

                {serviceData.map(({ icon, title, description, link }, index) => (

                    <div
                        key={index}
                        className="
                    border border-gray-400 dark:border-white/30
                    rounded-lg 
                    px-8 
                    py-12 
                    cursor-pointer 
                    transition-all 
                    duration-500
                    hover:bg-lightHover dark:hover:bg-darkHover
                    hover:-translate-y-2 
                    hover:shadow-lg
                    "
                    >

                        <Image
                            src={icon}
                            alt=''
                            className='w-10'
                        />


                        <h3 className="
                        text-lg 
                        my-4 
                        text-gray-700 dark:text-white
                        ">
                            {title}
                        </h3>


                        <p className="
                        text-sm 
                        text-gray-600 dark:text-gray-300
                        leading-5
                        ">
                            {description}
                        </p>


                        <a
                            href={link}
                            className="
                        flex 
                        items-center 
                        gap-2 
                        text-sm 
                        mt-5
                        text-gray-800 dark:text-white
                        "
                        >
                            Read more

                            <Image
                                alt=''
                                src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                                className='w-4'
                            />

                        </a>


                    </div>

                ))}

            </div>

        </div>
    )
}

export default Services;
