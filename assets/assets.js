import user_image from './user-image.png';

{/**--I have imported the react icon and i have deleted the actual existing icon images */}
import { FaGlobe, FaMobileAlt, FaPaintBrush, FaPenNib, FaCode, FaGraduationCap, FaProjectDiagram, FaBook, FaTrophy, FaJava, FaReact } from "react-icons/fa";


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
import My_portfolio_homepage_image from './my_portfolio_homepage.png';
import work3 from './work-3.png';
import happy_birthday_homepage_image from './happy_birthday_homepage.png';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa6';

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
    My_portfolio_homepage_image,
    work3,
    happy_birthday_homepage_image
};

export const workData = [
    {
        title: 'Academy Portal Management System',
        description: 'Academic Portal Project this project emphasized of object oriented programming...',
        technologies:'Java',
        techicons:[
         <FaJava key='ts'/>
      ],
        bgImage: '/work-1.png',
        github:'https://github.com/Samuel-5485/academic_portal_project_feature_of_Oop_using_java_programming',
        live:'...'
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio with dark mode',
        technologies:'React • Next.js • Tailwind css',
        techicons:[
          <FaReact key='react'/>,
          <SiNextdotjs key='next'/>,
          <SiTailwindcss key='ts'/>
        ],
        bgImage: '/my_portfolio_homepage.png',
        github:'https://github.com/Samuel-5485/My--Portfolio-Website',
        live:'...'
    },
    {
        title: 'Wellness Streak',
        description: 'Web Design',
        bgImage: '/work-3.png',
        technologies:'TypeScript',
        techicons:[
         <SiTypescript key='ts'/>
      ],
        github:'https://github.com/Samuel-5485/wellness_streaks',
        live:'...'
    },
    {
        title: 'Happy Birthday Gift',
        description: 'Happy birthday gift you can give for your friends...',
        bgImage: '/happy_birthday_homepage.png',
        technologies:'TypeScript • React',
        techicons:[
         <SiTypescript key='ts'/>,
         <FaReact/>
      ],
        github:'https://github.com/Samuel-5485/happy-birthday-gift-projects-',
        live:'https:happy-birthday-gift-projects.vercel.app'
    },
      {
        title: 'Secure User Authentication System',
        description: 'This project is a full-stack application designed to provide secure user authentication using modern web technologies.',
        bgImage: '/work-4.png',
        technologiesF:'React.js • Node.js',
        techicons:[
          <FaReact key='react'/>,
          <FaNodeJs key='node'/>         
        ],
        github:'https://github.com/Samuel-5485/PRODIGY_FS_01/tree/main',
        live:'...'
      } 
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
    { icon: <FaTrophy/>, title: 'Achievements', description: 'Earned certifications and completed professional programs from globally recognized learning platforms.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.figma, assets.git, assets.sql, assets.oracle
];

export const certifications = [
  {
    title: "Responsive Web Design Certification",
    issuer: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/certification/samuel-54/responsive-web-design",
    description: "HTML, CSS, responsive layouts, accessibility."
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "Udacity",
    link: "https://www.udacity.com/certificate/e/5153cd1a-7872-11f0-ae3f-3f57f644920f",
    description: "Data analysis and interpretation."
  },
  {
    title: "Basic Python",
    issuer: "UniAthena",
    link: "https://drive.google.com/file/d/1CXdqrx8gA6N71rKk1BNelcUq8TcOyQpB/view?pli=1",
    description: "Python fundamentals."
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "AWS",
    link: "https://www.credly.com/badges/d652fd88-d6ac-4471-a5e4-7be2f350fbf3/linked_in_profile",
    description: "Cloud computing fundamentals."
  },
  {
    title: "AI Career Essentials",
    issuer: "ALX",
    link: "https://savanna.alxafrica.com/certificates/hB38SFn9f7",
    description: "AI concepts and career readiness."
  },
      {
    title: "Wellness Hackathon",
    issuer: "ALX",
    link: "https://drive.google.com/file/d/1NXa3JDY7_BVwL58gwy8kJgGk6i89GEY1/view?usp=sharing",
    description: "AI concepts and career readiness."
  }
];