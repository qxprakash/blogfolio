"use client"
import React from "react";
import dynamic from "next/dynamic";

// Lazy loading the icons
const FaReact = dynamic(() => import("react-icons/fa").then(mod => mod.FaReact));
const FaNodeJs = dynamic(() => import("react-icons/fa").then(mod => mod.FaNodeJs));
const FaPython = dynamic(() => import("react-icons/fa").then(mod => mod.FaPython));
const FaRust = dynamic(() => import("react-icons/fa").then(mod => mod.FaRust));
const FaHtml5 = dynamic(() => import("react-icons/fa").then(mod => mod.FaHtml5));
const FaCss3Alt = dynamic(() => import("react-icons/fa").then(mod => mod.FaCss3Alt));
const FaGitAlt = dynamic(() => import("react-icons/fa").then(mod => mod.FaGitAlt));
const FaDocker = dynamic(() => import("react-icons/fa").then(mod => mod.FaDocker));
const FaJava = dynamic(() => import("react-icons/fa").then(mod => mod.FaJava));
const FaAws = dynamic(() => import("react-icons/fa").then(mod => mod.FaAws));
const FaLinux = dynamic(() => import("react-icons/fa").then(mod => mod.FaLinux));
const FaDatabase = dynamic(() => import("react-icons/fa").then(mod => mod.FaDatabase));
const FaJsSquare = dynamic(() => import("react-icons/fa").then(mod => mod.FaJsSquare));
const FaSwift = dynamic(() => import("react-icons/fa").then(mod => mod.FaSwift));
const FaAngular = dynamic(() => import("react-icons/fa").then(mod => mod.FaAngular));
const FaVuejs = dynamic(() => import("react-icons/fa").then(mod => mod.FaVuejs));
const FaPhp = dynamic(() => import("react-icons/fa").then(mod => mod.FaPhp));

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
