import React from "react";
import {
  FaReact, FaNodeJs, FaPython, FaRust, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker,
  FaJava, FaAws, FaLinux, FaDatabase, FaJsSquare, FaSwift, FaAngular, FaVuejs, FaPhp
} from "react-icons/fa"; // Importing more icons from react-icons

const TechStackBanner = () => {
  return (
    <div className="relative overflow-hidden w-full h-32 mt-8 mb-16">
      {/* First Row - Moving Left */}
      <div className="flex animate-marquee space-x-12">
        <div className="flex space-x-12">
          <FaReact className="text-blue-500 text-4xl" />
          <FaNodeJs className="text-green-500 text-4xl" />
          <FaPython className="text-yellow-500 text-4xl" />
          <FaRust className="text-gray-500 text-4xl" />
          <FaHtml5 className="text-orange-500 text-4xl" />
          <FaCss3Alt className="text-blue-500 text-4xl" />
          <FaGitAlt className="text-red-500 text-4xl" />
          <FaDocker className="text-blue-500 text-4xl" />
          <FaJava className="text-red-600 text-4xl" />
          <FaAws className="text-orange-500 text-4xl" />
          <FaLinux className="text-yellow-500 text-4xl" />
          <FaDatabase className="text-purple-500 text-4xl" />
          <FaJsSquare className="text-yellow-500 text-4xl" />
        </div>
        <div className="flex space-x-12">
          <FaReact className="text-blue-500 text-4xl" />
          <FaNodeJs className="text-green-500 text-4xl" />
          <FaPython className="text-yellow-500 text-4xl" />
          <FaRust className="text-gray-500 text-4xl" />
          <FaHtml5 className="text-orange-500 text-4xl" />
          <FaCss3Alt className="text-blue-500 text-4xl" />
          <FaGitAlt className="text-red-500 text-4xl" />
          <FaDocker className="text-blue-500 text-4xl" />
          <FaJava className="text-red-600 text-4xl" />
          <FaAws className="text-orange-500 text-4xl" />
          <FaLinux className="text-yellow-500 text-4xl" />
          <FaDatabase className="text-purple-500 text-4xl" />
          <FaJsSquare className="text-yellow-500 text-4xl" />
        </div>
      </div>

      {/* Second Row - Moving Right */}
      <div className="flex animate-marquee-reverse space-x-12 mt-8">
        <div className="flex space-x-12">
          <FaSwift className="text-orange-500 text-4xl" />
          <FaAngular className="text-red-500 text-4xl" />
          <FaVuejs className="text-green-500 text-4xl" />
          <FaPhp className="text-purple-500 text-4xl" />
          <FaDatabase className="text-purple-500 text-4xl" />
          <FaAws className="text-orange-500 text-4xl" />
          <FaLinux className="text-yellow-500 text-4xl" />
          <FaJava className="text-red-600 text-4xl" />
          <FaCss3Alt className="text-blue-500 text-4xl" />
          <FaHtml5 className="text-orange-500 text-4xl" />
          <FaRust className="text-gray-500 text-4xl" />
          <FaPython className="text-yellow-500 text-4xl" />
        </div>
        <div className="flex space-x-12">
          <FaSwift className="text-orange-500 text-4xl" />
          <FaAngular className="text-red-500 text-4xl" />
          <FaVuejs className="text-green-500 text-4xl" />
          <FaPhp className="text-purple-500 text-4xl" />
          <FaDatabase className="text-purple-500 text-4xl" />
          <FaAws className="text-orange-500 text-4xl" />
          <FaLinux className="text-yellow-500 text-4xl" />
          <FaJava className="text-red-600 text-4xl" />
          <FaCss3Alt className="text-blue-500 text-4xl" />
          <FaHtml5 className="text-orange-500 text-4xl" />
          <FaRust className="text-gray-500 text-4xl" />
          <FaPython className="text-yellow-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default TechStackBanner;
