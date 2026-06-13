import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
        <div>
            <Image src ={assets.logo} alt='logo'className='w-36 mx-auto mb-2'/>
    
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src ={assets.mail_icon} alt='mail icon'className='w-6'/>
        samediriba54@gmail.com
    </div>
    </div>
    <div className='text-center sm:flex items-center justify-between border-t border-gray-400
    mx-[10%] mt-12 py-6'>
        <p>© 2026 Sami Diriba. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-5 sm:mt-0'>
            <li><a target='_blank' href='www.linkedin.com/in/samuel-diriba177866'></a>LinkedIn</li>
            <li><a target='_blank' href='https://t.me/samitechacademy'></a>Telegram</li>
            <li><a target='_blank' href='https://github.com/Samuel-5485/'></a>GitHub</li>
            
        </ul>
    </div>
    </div>
  )
}

export default Footer