import React from "react";
import { FaGithubAlt, FaStar, FaCodeBranch, FaFolder } from "react-icons/fa"; // Importing relevant icons

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
    <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg border border-gray-700 w-10/12 mb-6 relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <FaFolder className="text-purple-400 text-xl" /> {/* Icon next to project name */}
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-4">{language}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <FaStar className="text-gray-400" /> {/* Star icon */}
            <span className="text-gray-400 text-sm">{stars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaCodeBranch className="text-gray-400" /> {/* Fork icon */}
            <span className="text-gray-400 text-sm">{forks}</span>
          </div>
        </div>
        {repoCount && (
          <div className="bg-purple-700 text-white text-sm px-2 py-1 rounded-full">
            {repoCount} repositories
          </div>
        )}
      </div>
      {/* Code link moved to bottom right */}
      <a href={link} className="absolute bottom-6 right-6 text-blue-500 text-sm font-medium flex items-center space-x-1">
        <FaGithubAlt className="text-blue-500" /> {/* Code icon */}
        <span>Code</span>
      </a>
    </div>
  );
};

export default ProjectCard;
