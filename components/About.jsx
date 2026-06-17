import React from "react";
import { assets, infoList, toolsData,certifications } from '@/assets/assets';
import Image from "next/image";
import { useState } from 'react';
import {FaArrowRight, FaTimes } from "react-icons/fa";

const About = ({ isDarkMode }) => {
    const [showModal, setShowModal] = useState(false);
    const [showCertifications, setShowCertifications] = useState(false);
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
                                    className="mt-0 px-4 py-2 border border-gray-400 dark:border-white/30 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition flex items-center gap-2">
                                    Read more<FaArrowRight/>
                                    </button>
                            {/*--Show Modal--*/}
                      
                         {showModal && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                            <div className="bg-white dark:bg-darkTheme text-black dark:text-white p-8 rounded-xl max-w-2xl mx-4 relative">

                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-xl hover:text-red-500 transition"
                            >
                                 <FaTimes />
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
                        {infoList.map(({ icon, title, description },
                            index) => (
                            <li
                                key={index}
                                onClick={() => title === "Achievements" && setShowCertifications(true)}
                                className={`border border-gray-300 dark:border-white/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                                 ${title === "Achievements" ? "cursor-pointer hover:border-yellow-500" : ""} `}>
                                
                                <div className="text-3xl text-blue-600 dark:text-white mt-2">
                                    {icon}
                                </div>

                                <h3 className='my-4 text-xl font-semibold text-blue-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>{description}</p>
                                
                                 {title === "Achievements" && (
                                <p className="mt-3 text-sm text-yellow-600 dark:text-yellow-400 font-medium">
                                    View Certifications →
                                        </p>
                                    )}
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

                           

                    {/* Certifications Modal */}
{showCertifications && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div className="relative bg-white dark:bg-darkTheme text-black dark:text-white p-8 rounded-xl max-w-4xl w-[95%] max-h-[85vh] overflow-y-auto">

      <button
        onClick={() => setShowCertifications(false)}
        className="absolute top-4 right-4 text-xl hover:text-red-500 transition"
      >
        <FaTimes />
      </button>

      <h2 className="text-3xl font-Ovo mb-6">
        Certifications & Achievements
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Certifications earned through continuous learning and professional development.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 dark:border-white/20 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <h3 className="font-semibold text-lg text-black dark:text-white">
              {cert.title}
            </h3>

            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
              {cert.issuer}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
              {cert.description}
            </p>

            <p className="mt-4 text-sm font-medium text-green-600">
              View Certificate →
            </p>

          </a>
        ))}

      </div>

    </div>

  </div>
)}                         {/**--certification models 
                            {certifications.map((cert, index) => (
                                <a
                                    key={index}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block border border-gray-300 dark:border-white/20 rounded-lg p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="font-semibold text-lg text-black dark:text-white">
                                    {cert.title}
                                    </h3>

                                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                                    {cert.issuer}
                                    </p>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                    {cert.description}
                                    </p>

                                    <p className="mt-3 text-sm font-medium text-green-600">
                                    View Certificate →
                                    </p>
                                </a>
                                ))} */}
                                                

                            {/**--Experience showcase */}
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
