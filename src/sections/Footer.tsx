"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  RiHomeHeartLine,
  RiHomeHeartFill,
  RiGitRepositoryLine,
  RiGitRepositoryFill,
} from "react-icons/ri";
import { LuFeather } from "react-icons/lu";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

const Footer = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <footer className="fixed left-0 bottom-0 w-full bg-black bg-opacity-30 backdrop-blur-lg border-t-2 z-40 border-white shadow-lg">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`text-2xl transition-colors duration-300 ${
            isActive("/") ? "text-blue-400" : "text-white hover:text-blue-200"
          }`}
        >
          {isActive("/") ? <RiHomeHeartFill /> : <RiHomeHeartLine />}
        </Link>
        <Link
          href="/projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("profile-overview");
          }}
          className={`text-2xl transition-colors duration-300 ${
            isActive("/projects")
              ? "text-blue-400"
              : "text-white hover:text-blue-200"
          }`}
        >
          {isActive("/projects") ? (
            <RiGitRepositoryFill />
          ) : (
            <RiGitRepositoryLine />
          )}
        </Link>
        <Link
          href="/blog"
          className={`text-2xl transition-colors duration-300 ${
            isActive("/blog")
              ? "text-blue-400"
              : "text-white hover:text-blue-200"
          }`}
        >
          <LuFeather className={isActive("/blog") ? "fill-current" : ""} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
