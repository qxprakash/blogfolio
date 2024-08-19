import React from "react";
import { FaGithubAlt, FaStar, FaCodeBranch, FaFolder } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  link: string;
  repoCount?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, language, stars, forks, link, repoCount }) => {
  return (
    <div className="relative p-6 mx-1.5 rounded-lg shadow-lg border border-[#2e2e4d] h-full flex flex-col justify-between bg-[#121212] bg-opacity-40 backdrop-filter backdrop-blur-md overflow-hidden">
      {/* Subtle Glowing Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#45285e33] to-transparent opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 rounded-lg border border-opacity-10 bg-gradient-to-br from-transparent to-[#3a1d5c4d]"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <FaFolder className="text-[#5a3d91] text-xl" />
            <h2 className="text-2xl font-semibold text-[#e6e6e6]">{title}</h2>
          </div>
        </div>
        <p className="text-sm text-[#c1c1c1] mb-4 uppercase tracking-wider">{language}</p>
        <p className="text-[#d3d3d3] mb-4">{description}</p>
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <FaStar className="text-[#b89743]" />
              <span className="text-[#c1c1c1] text-sm">{stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCodeBranch className="text-[#c1c1c1]" />
              <span className="text-[#c1c1c1] text-sm">{forks}</span>
            </div>
          </div>
          {repoCount && (
            <div className="bg-[#3a1d5c] bg-opacity-60 text-white text-sm px-2 py-1 rounded-full shadow-sm">
              {repoCount} repositories
            </div>
          )}
        </div>
        <a href={link} className="text-[#7045a5] text-sm font-medium flex items-center space-x-1 justify-end">
          <FaGithubAlt className="text-[#7045a5]" />
          <span>View Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
