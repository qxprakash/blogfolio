import React from "react";
import { FaRss, FaHome, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <header className="py-8 mb-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
        <Link
            href="/blog"
            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
            aria-label="RSS Feed"
          >
            <FaRss size={28} />
          </Link>
          <Link
            href="/blog"
            className="text-3xl font-bold text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Prakash's Blog
          </Link>
        </div>
        <div className="hidden md:block items-center space-x-4">
          <Link
            href="/"
            className="inline-flex items-center px-3 py-1.5 border border-gray-200 text-gray-400 rounded-sm hover:border-gray-200 hover:text-black hover:bg-gray-200 transition-all duration-200 ease-in-out group"
            aria-label="Home"
          >
            <FaArrowLeft className="w-3 h-3 mr-2" />
            <span className="text-sm font-medium">Back To Home</span>
          </Link>
        </div>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        Documenting my journey exploring Tech !
      </p>
    </header>
  );
};

export default BlogHeader;