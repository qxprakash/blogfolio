import React from "react";
import { FaRss } from "react-icons/fa";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <header className="py-8 mb-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Link
          href="/blog"
          className="text-3xl font-bold text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          My Blog
        </Link>
        <Link
          href="/blog/rss"
          className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
        >
          <FaRss size={24} />
        </Link>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Exploring ideas, one post at a time
      </p>
    </header>
  );
};

export default BlogHeader;
