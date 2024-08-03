import React from "react";
import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import { AiOutlineCloudDownload } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";



export const Header = () => {
  return (
    <header className="py-4 border-b border-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <LogoIcon className="h-8 w-8"/>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] "></div>
                </div>
                <div className="flex gap-1"> 
                <span className="flex justify-center items-center"><LuDownload />
                </span> <span className="flex justify-center items-center">Resume</span>
                </div>
            </button>
            <MenuIcon/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
