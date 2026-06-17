import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';
import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";
const Footer = ({ isDarkMode }) => {

    return (
        <div className='mt-20 pb-10'>
            <div>
               {/*you can add here logo*/}

                <div className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail icon' className='w-6' />
                    samediriba54@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/30
    mx-[10%] mt-12 py-6 text-gray-700 dark:text-gray-300'>
                <p>© 2026 Sami Diriba. All rights reserved.</p>
                            <ul className='flex items-center gap-4 justify-center mt-5 sm:mt-0'>

                            <li>
                                <a
                                    href='https://www.linkedin.com/in/samuel-diriba177866/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-white/30 rounded-full hover:bg-blue-600 hover:text-white transition'>
                                    <FaLinkedin />
                                </a>
                            </li>

                            <li>
                                <a
                                    href='https://t.me/samitechacademy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-white/30 rounded-full hover:bg-sky-500 hover:text-white transition'
                                >
                                    <FaTelegramPlane />
                                </a>
                            </li>

                            <li>
                                <a
                                    href='https://github.com/Samuel-5485/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-white/30 rounded-full hover:bg-black hover:text-white transition'
                                >
                                    <FaGithub />
                                </a>
                            </li>

            </ul>
            </div>
        </div>
    )
}

export default Footer
