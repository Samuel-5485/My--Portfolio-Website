import { assets, serviceData } from "@/assets/assets";
import React  from "react";
import Image from "next/image";
const Services = () =>{
    return(
        <div id="services " className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
            
            <p className="text-center mx-w-2xl mx-auto mt-5 mb-12 font-Ova">
                I am frontend developer from Ethiopia in multiple freelancer like upwork, fiver
            </p>
           <div className="grid grid-cols-4 gap-6 my-10">
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index}>
                    <Image src={icon} alt=''className='w-10'/>
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">
                        {description}
                    </p>
                    <a href={link} className="flex item-center gap-2 text-sm mt-5"> 
                        Read more <Image src={assets.right_arrow} className='w-full'></Image>
                    </a>
                </div>
            ))}
           </div>
        </div>
    )
}
export default Services;