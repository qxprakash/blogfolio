"use client";
import React from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";
import Button from "@/components/Button";
import { scrollToSection } from "@/lib/utils";
export const Header = () => {




  return (
    <header className="py-4 border-b border-white md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href="/blog"
                className="text-white/70 hover:text-white transition"
              >
                blog
              </a>
              <a href="#" className="text-white/70 hover:text-white transition"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("profile-overview");
                }}
              >
                Experience
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Projects
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button icon={LuDownload}>Resume</Button>
            {/* <MenuIcon className="md:hidden" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
