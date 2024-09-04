import React from "react";
import { FaEnvelope, FaUser, FaFireAlt, FaPaperPlane } from "react-icons/fa"; // Importing icons
import Image from "next/image";
import satelliteImage from "@/assets/connect-image.webp";

const ConnectForm = () => {
  return (
    <section
      id="connect-form"
      className="flex flex-col md:flex-row items-center justify-center mx-auto p-4 sm:p-6 md:p-8 mb-10 sm:mb-16 md:mb-20 w-full max-w-xs md:space-x-4 sm:max-w-sm md:max-w-4xl lg:max-w-6xl"
    >
      <div className="w-full md:w-1/2 md:pr-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-300 mb-8">
          Have a question or want to collaborate? Drop me a message!
        </p>
        <form className="w-full">
          <div className="mb-4">
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full pl-10 pr-4 py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              placeholder="What's on your mind?"
              className="w-full h-28 pl-4 pr-4 py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-end">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaFireAlt className="mr-2" />
              Surprise me
            </button>

            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaPaperPlane className="mr-2" />
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full hidden md:block md:w-1/2 mt-8 md:mt-0 md:pl-8 lg:pl-16">
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src={satelliteImage.src}
            alt="Connect"
            width={500}
            height={500}
            className="relative rounded-lg shadow-2xl transition duration-300 ease-in-out transform group-hover:scale-105 ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
