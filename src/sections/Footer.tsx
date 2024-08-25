import React from "react";
import { FaHome, FaFolderOpen } from "react-icons/fa";
import { LuFeather } from "react-icons/lu";
import { RiHomeHeartLine, RiGitRepositoryFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full bg-black bg-opacity-30 backdrop-blur-lg border-t-2 z-40  border-white shadow-lg">
      <div className="flex justify-around items-center h-16">
        <a href="/" className="text-white text-2xl">
          <RiHomeHeartLine />
        </a>
        <a href="#" className="text-white text-2xl">
          <RiGitRepositoryFill />
        </a>
        <a href="/blog" className="text-white text-2xl">
          <LuFeather />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
