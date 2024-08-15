import React from "react";
import { FaEnvelope, FaUser, FaFireAlt, FaPaperPlane } from "react-icons/fa"; // Importing icons

const ConnectForm = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto p-8 mb-20 max-w-md">
      <form className="mt-8 w-full">
        <div className="mb-4">
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            placeholder="What's on your mind?"
            className="w-full h-28 pl-4 pr-4 py-2.5 bg-[#0f0f0f] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          />
        </div>

        <div className="flex space-x-4 justify-end">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <FaFireAlt className="mr-2" />
            Surprise me
          </button>

          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
