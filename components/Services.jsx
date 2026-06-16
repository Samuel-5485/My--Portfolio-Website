'use client'

import { assets, serviceData } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";

const Services = ({ isDarkMode }) => {

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">

      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
        What I offer
      </h4>

      <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
        I provide modern and reliable software solutions, focusing on web development,
        problem-solving, and technology-driven projects. My goal is to create
        applications that are functional, user-friendly, and impactful.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">

        {serviceData.map((service, index) => (

          <div
            key={index}
            className="
              border border-gray-400 dark:border-white/30
              rounded-lg
              px-8
              py-12
              cursor-pointer
              transition-all
              duration-500
              hover:bg-lightHover
              dark:hover:bg-darkHover
              hover:-translate-y-2
              hover:shadow-lg
            "
          >

            <Image
              src={service.icon}
              alt=""
              className="w-10"
            />

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
              {service.description}
            </p>

            <button
              onClick={() => setSelectedService(service)}
              className="flex items-center gap-2 text-sm mt-5 text-gray-800 dark:text-white"
            >
              Read More

              <Image
                src={
                  isDarkMode
                    ? assets.right_arrow_bold_dark
                    : assets.right_arrow_bold
                }
                alt=""
                className="w-4"
              />
            </button>

          </div>

        ))}

      </div>

      {/* Modal */}

      {selectedService && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="relative bg-white dark:bg-darkTheme p-8 rounded-xl max-w-lg w-[90%] shadow-xl">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-xl text-black dark:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              {selectedService.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-7">
              {selectedService.fullDescription}
            </p>

          </div>

        </div>

      )}

    </div>
  );
};

export default Services;