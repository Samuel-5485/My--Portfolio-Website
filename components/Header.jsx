import React from 'react'
import Image from 'next/image';
import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";
const Header = ({ isDarkMode }) => {

    const roles = [
        "Web developer",
        "Frontend developer",
        "Aspiring Machine Learning"
    ];
    
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentRole = roles[roleIndex];
    
        const typingSpeed = isDeleting ? 50 : 100;
    
        const timer = setTimeout(() => {
    
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));
    
                if (text === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
    
            } else {
                setText(currentRole.substring(0, text.length - 1));
    
                if (text === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
    
        }, typingSpeed);
    
    
        return () => clearTimeout(timer);
    
    }, [text, isDeleting, roleIndex]);


    return (
        <div id="top" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <Image src={assets.profile_img} alt="profile_img" className='rounded-full w-32 w-32 animate-bounce-slow '/>
            <h3 className='flex items-center gap-2 text-xl text-gray-800 dark:text-white'>
                Hi! I&apos;m Sami Diriba
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-gray-900 dark:text-white'>
    {text}
    <span className="animate-pulse">|</span>
</h1>
            <p className='max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300'>
                I am a passionate and skilled full stack developer with expertise in both frontend and backedend developer technologies.
                I have a strong foundation in HTML, CSS, JavaScript, and various frontend frameworks.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
py-2.5 border border-gray-500 dark:border-white/50 
rounded-full ml-4 
text-gray-700 dark:text-white
transition duration-300
hover:bg-black hover:text-white
dark:hover:bg-white dark:hover:text-black'>
                    Contact me<Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt='' className='w-4' /></a>
                <a href="/resume_samuel_diriba.pdf" download className='hidden lg:flex items-center gap-3 px-10
py-2.5 border border-gray-500 dark:border-white/50 
rounded-full ml-4 
text-gray-700 dark:text-white
transition duration-300
hover:bg-black hover:text-white
dark:hover:bg-white dark:hover:text-black'>
                    my resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
            </div>

        </div>
    )
}
export default Header;
