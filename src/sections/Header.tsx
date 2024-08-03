import React from "react";
import LogoIcon from '@/assets/logo.svg'

export const Header = () => {
  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <LogoIcon className="h-8 w-8"/>
          </div>
          <div>
            <button>
                Join Waitlist
            </button>
            <span>
                menu
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
