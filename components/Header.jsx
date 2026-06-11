import React from 'react'
import Image from 'next/image';
import {assets} from "@/assets/assets";

const Header = ()=>{
    return(
        <div>
            <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>
            <h3>Hi! I'm Sami Diriba <Image src={assets.hand_icon} alt="" className='w-6'/></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full Stack Developer.</h1>
            <p className='max-w-2xl mx-auto font-Ova'>
                I am a passionate and skilled full stack developer with expertise in both frontend and backedend developer technologies.
                 I have a strong foundation in HTML, CSS, JavaScript, and various frontend frameworks such as React and Vue.js. On the backend, 
                 I am proficient in Node.js, Express, and databases like MongoDB and MySQL.
                 I am dedicated to creating seamless and efficient web applications that provide exceptional user experiences. With a keen eye for detail and a commitment to delivering high-quality code, I strive to bring innovative solutions to every project I work on.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black 
                text-white flex items-center gap-2'>Contact me<Image src = {assets.right_arrow_white} alt=''className='w-4'/></a>
                <a href="/resume_samuel_diriba.pdf"download className='px-10 py-3 border rounded-full border-gray-500
                flex items-center gap-2'>
                my resume <Image src={assets.download_icon}alt=''className='w-4'/></a>
            </div>

        </div>
    )
}
export default Header;