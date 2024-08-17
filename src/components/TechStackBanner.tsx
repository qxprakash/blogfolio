"use client";
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
  // First set of icons for the first banner
  const iconsSet1 = [
    <FaReact key="react" className="text-purple-400 text-4xl" />,
    <FaNodeJs key="nodejs" className="text-green-400 text-4xl" />,
    <FaPython key="python" className="text-yellow-400 text-4xl" />,
    <FaRust key="rust" className="text-red-400 text-4xl" />,
    <FaHtml5 key="html5" className="text-orange-400 text-4xl" />,
    <FaCss3Alt key="css3" className="text-blue-400 text-4xl" />,
    <FaGitAlt key="git" className="text-red-600 text-4xl" />,
  ];

  // Second set of icons for the second banner
  const iconsSet2 = [
    <FaDocker key="docker" className="text-blue-500 text-4xl" />,
    <FaJava key="java" className="text-red-700 text-4xl" />,
    <FaAws key="aws" className="text-yellow-500 text-4xl" />,
    <FaLinux key="linux" className="text-yellow-600 text-4xl" />,
    <FaDatabase key="database" className="text-green-500 text-4xl" />,
    <FaJsSquare key="js" className="text-yellow-400 text-4xl" />,
    <FaSwift key="swift" className="text-red-400 text-4xl" />,
    <FaAngular key="angular" className="text-red-500 text-4xl" />,
    <FaVuejs key="vue" className="text-green-400 text-4xl" />,
    <FaPhp key="php" className="text-indigo-400 text-4xl" />,
  ];

  return (
    <div className="relative overflow-hidden py-10">
      {/* Left Gradient */}
      <div className="absolute top-0 left-0 w-[250px] h-full bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
      {/* Right Gradient */}
      <div className="absolute top-0 right-0 w-[250px] h-full bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

      {/* First Scrolling Icons Banner */}
      <div className="flex animate-slide space-x-[50px]">
        {iconsSet1.concat(iconsSet1).map((icon, index) => (
          <span key={`iconSet1-${index}`} className="mx-4">{icon}</span>
        ))}
      </div>

      {/* Second Scrolling Icons Banner */}
      <div className="flex animate-slideOpp space-x-[50px] mt-12">
        {iconsSet2.concat(iconsSet2).map((icon, index) => (
          <span key={`iconSet2-${index}`} className="mx-4">{icon}</span>
        ))}
      </div>
    </div>
  );
};

export default TechStackBanner;
