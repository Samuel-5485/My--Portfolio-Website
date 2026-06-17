import user_image from './user-image.png';

{/**--I have imported the react icon and i have deleted the actual existing icon images */}
import { FaGlobe, FaMobileAlt, FaPaintBrush, FaPenNib, FaCode, FaGraduationCap, FaProjectDiagram, FaBook, FaTrophy } from "react-icons/fa";


import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import sql from './sql.png';
import oracle from './oracle.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './sami1.png';
import about_image from './about-image-1.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';

import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.png';
import work2 from './work-2.png';
import work3 from './work-3.png';
import work4 from './work-4.png';

export const assets = {
    user_image,
    vscode,
    firebase,
    figma,
    git,
    sql,
    oracle,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    about_image,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    work1,
    work2,
    work3,
    work4
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Building responsive and interactive websites',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
];

export const serviceData = [
    { icon: <FaGlobe/>, title: 'Web design', description: 'Building responsive, Portfolio website and interactive websites.', fullDescription: 'I create modern, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. My focus is on delivering fast, accessible, and visually appealing websites.', link: '' },
    { icon: <FaMobileAlt/>, title: 'Mobile app', description: 'Developing complete web applications.', fullDescription: 'I build full-stack applications that combine intuitive user interfaces with powerful backend systems, including databases, APIs, authentication, and deployment.', link: '' },
    { icon: <FaPaintBrush/>, title: 'UI/UX design', description: 'Creating clean, responsive, and user-friendly interfaces that enhance user experience.', fullDescription: 'I transform ideas and design concepts into modern, responsive, and interactive user interfaces. By focusing on usability, accessibility, and performance, I create digital experiences that are both visually appealing and easy to use. My goal is to ensure that every application delivers a seamless experience across different devices and screen sizes.', link: '' },  
    { icon: <FaPenNib/>, title: 'Content Writing', description: 'Crafting clear, engaging, and audience-focused content for digital platforms.', fullDescription: "I create well-structured and engaging content that communicates ideas effectively. Whether it's website content, technical documentation, blog articles, or project descriptions, I focus on clarity, readability, and delivering value to the target audience. Good content not only informs but also helps build trust and engagement.", link: '' },
    
    
]   
{/**--Info list updated with react icon */}
export const infoList = [
    { icon: <FaCode/>, title: 'Languages & Technologies', description: 'Experienced with HTML, CSS, JavaScript, Python, Java, C++, Git, SQL, and modern web development tools.' },
    { icon: <FaGraduationCap/>, title: 'Education', description: 'Computer Science undergraduate at Ambo University with a strong interest in technology stack' },
    { icon: <FaProjectDiagram/>, title: 'Projects', description: 'Built academic and personal projects to strengthen my practical development and problem-solving skills.' },
    { icon: <FaBook/>, title: 'Currently Learning', description: 'Expanding my knowledge in Data Structure & Algorithm, Machine Learning, Data Science, Information Security, and modern development practices.' },
    { icon: <FaTrophy/>, title: 'Achievements', description: 'Recognized through hackathons, online programs, and project-based learning experiences.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.figma, assets.git, assets.sql, assets.oracle
];