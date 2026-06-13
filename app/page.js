'use client'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
export default function Home() {

  const condition = true;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(condition){
      if (localStorage.theme === 'dark' || 
        (!(localStorage.theme) && window.
       matchMedia('(prefers-color-scheme: dark)').matches)){
        setIsDarkMode(true)
      }
    }else{
      setIsDarkMode(false)
    }
  },[])
  useEffect(()=>{
     const savedTheme = localStorage.getItem('theme');
     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
   <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
   <Header isDarkMode={isDarkMode} />
   <About isDarkMode={isDarkMode}/>
   <Services isDarkMode={isDarkMode}/>
   <Works isDarkMode={isDarkMode}/>
   <Contact isDarkMode={isDarkMode}/>
   <Footer isDarkMode={isDarkMode}/>
   </>
  );
}
