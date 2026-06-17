import React from "react";
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from "next/image";
import { useState } from 'react';

const About = ({ isDarkMode }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
            <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 mt-20'>
            <div className="relative group">

</div>
                <div className='flex-1'>
                    <p className="max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 mb-4">I'm Sami Diriba, a Computer Science student at Ambo University and an aspiring 
                        Full-Stack Developer and Machine Learning Engineer.</p> 
                        
                         <button
                                    onClick={() => setShowModal(true)}
                                    className="mt-0 px-6 py-2 border border-gray-400 dark:border-white/30 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition">
                                    Read More →
                                    </button>
                            {/*--Show Modal--*/}
                      
                         {showModal && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                            <div className="bg-white dark:bg-darkTheme text-black dark:text-white p-8 rounded-xl max-w-2xl mx-4 relative">

                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-2xl"
                            >
                                ✕
                            </button>

                            <h2 className="text-3xl font-Ovo mb-6">
                                About Me
                            </h2>

                            <p className="leading-7 text-gray-700 dark:text-gray-300">
                                I am a Computer Science undergraduate at Ambo University with a
                                strong passion for technology and innovation.

                                <br /><br />

                                Throughout my academic journey, I have dedicated myself to learning
                                programming languages, improving my technical skills, building
                                real-world projects, and collaborating with others to create
                                meaningful solutions.

                                <br /><br />

                                My interests include full-stack web development, software
                                engineering, data science, and artificial intelligence. I enjoy
                                transforming ideas into practical applications that solve real
                                problems.

                                <br /><br />

                                I am continuously expanding my knowledge through hands-on projects,
                                self-learning, and teamwork. My long-term goal is to become a
                                Machine Learning Engineer and contribute to impactful AI-driven
                                solutions.
                            </p>
                            </div>
                        </div>
                        )}
                      
                        
                    <ul className='grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description },
                            index) => (
                            <li className='border border-gray-300 dark:border-white/20
                                rounded-xl
                                p-6
                                transition-all duration-300
                                hover:-translate-y-2
                                hover:shadow-xl
                                hover:border-blue-500'
                                key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10 mt-4' />
                                <h3 className='my-4 text-xl font-semibold text-blue-700 dark:text-white'>{title}</h3>
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                        <div>
                            <h3 className="text-3xl font-bold">10+</h3>
                            <p>Projects</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">4+</h3>
                            <p>Technologies</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">2+</h3>
                            <p>Years Learning</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">100%</h3>
                            <p>Dedication</p>
                        </div>
                        </div>
        </div>
    )
}
export default About;
