import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Works = ({ isDarkMode }) => {
    return (
        <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>

            <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>Welcome to My Portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>
             Featured Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
                I build modern web applications, AI-powered solutions, and software projects focused on solving real-world problems. 
                Here are some selected projects that showcase my technical skills and creativity.
            </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">

                {workData.map((project, index) => (

                    <div
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-gray-300 dark:border-white/20 bg-white dark:bg-darkHover shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >

                    <div
                        className="h-35 sm:h-40 w-full bg-cover bg-center group-hover:scale-110 transition duration-700"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    />

                    <div className="p-6">

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                        </h3>

                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {project.description}
                        </p>

                        <div className="flex items-center gap-2 mt-4">

                        <FaCode className="text-blue-600" />

                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {project.technologies}
                        </span>

                        </div>

                        <div className="flex gap-4 mt-6">

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 hover:bg-lightHover dark:hover:bg-darkHover transition">
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>

                        </div>

                    </div>

                    </div>

                ))}

                </div>
                <a
                href="https://github.com/Samuel-5485/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-16 text-gray-700 dark:text-white hover:text-blue-600 transition"
                >
                View more projects on GitHub →
                </a>
        </div>

    )
}
export default Works;
