import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';

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
                <ul className='flex items-center gap-10 justify-center mt-5 sm:mt-0'>
                    <li><a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/samuel-diriba177866' className='hover:underline'>LinkedIn</a></li>
                    <li><a target='_blank' rel="noopener noreferrer" href='https://t.me/samitechacademy' className='hover:underline'>Telegram</a></li>
                    <li><a target='_blank' rel="noopener noreferrer" href='https://github.com/Samuel-5485/' className='hover:underline'>GitHub</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Footer
