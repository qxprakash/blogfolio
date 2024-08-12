import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='fixed left-0 bottom-0 w-full bg-black bg-opacity-30 backdrop-blur-lg border-t-2 border-white shadow-lg'>
      <div className='flex justify-around items-center h-16'>
        <a href="#" className='text-white text-2xl'>
          <FaHome />
        </a>
        <a href="#" className='text-white text-2xl'>
          <FaSearch />
        </a>
        <a href="#" className='text-white text-2xl'>
          <FaUser />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
