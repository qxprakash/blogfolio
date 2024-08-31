"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [isProjects, setIsProjects] = useState(false);
  const [shouldScrollToProjects, setShouldScrollToProjects] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (shouldScrollToProjects && pathname === "/") {
      scrollToSection("projects");
      setIsProjects(true);
      setShouldScrollToProjects(false);
    }
  }, [pathname, shouldScrollToProjects]);

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== "/") {
      setShouldScrollToProjects(true);
      router.push("/");
    } else {
      scrollToSection("projects");
      setIsProjects(true);
    }
  };

  return (
    <footer className="fixed left-0 bottom-0 w-full bg-black bg-opacity-30 backdrop-blur-lg border-t-2 z-40 border-white shadow-lg">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`text-2xl transition-colors duration-300 ${
            isActive("/") ? "text-blue-400" : "text-white hover:text-blue-200"
          }`}
          onClick={() => setIsProjects(false)}
        >
          {isActive("/") && !isProjects ? <RiHomeHeartFill /> : <RiHomeHeartLine />}
        </Link>
        <Link
          href=""
          onClick={handleProjectsClick}
          className={`text-2xl transition-colors duration-300 ${
            isProjects
              ? "text-blue-400"
              : "text-white hover:text-blue-200"
          }`}
        >
          {isProjects ? <RiGitRepositoryFill /> : <RiGitRepositoryLine />}
        </Link>
        <Link
          href="/blog"
          onClick={(e) => setIsProjects(false)}
          className={`text-2xl transition-colors duration-300 ${
            isActive("/blog") && !isProjects
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
