import React from "react";
import { FaEnvelope, FaUser, FaFireAlt, FaPaperPlane } from "react-icons/fa"; // Importing icons

const ConnectForm = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto p-4 sm:p-6 md:p-8 mb-10 sm:mb-16 md:mb-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <form className="mt-4 sm:mt-6 md:mt-8 w-full">
        <div className="mb-3 sm:mb-4">
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <textarea
            placeholder="What's on your mind?"
            className="w-full h-24 sm:h-28 pl-4 pr-4 py-2 sm:py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-end">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
          >
            <FaFireAlt className="mr-2" />
            Surprise me
          </button>

          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
          >
            <FaPaperPlane className="mr-2" />
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ConnectForm;
