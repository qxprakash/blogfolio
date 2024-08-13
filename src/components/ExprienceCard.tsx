import React from 'react';
import Image, { StaticImageData } from "next/image";

interface ExperienceCardProps {
  company: string;
  duration: string;
  position: string;
  location: string;
  tags: string[];
  description: string;
  logo: StaticImageData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  duration,
  position,
  location,
  tags,
  description,
  logo,
}) => {
  return (
    <div className="flex items-start mb-8 relative">
      {/* Vertical line and logo */}
      <div className="relative flex flex-col items-center mr-6">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-500"></div>

        {/* Logo with border */}
        <div className="z-10 bg-[#1a1a2e] p-2 rounded-full border-2 border-gray-500">
          <Image src={logo} alt={`${company} Logo`} width={40} height={40} />
        </div>
      </div>

      {/* Experience details */}
      <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg border border-gray-700 w-full">
        <h3 className="text-xl font-semibold text-white">{company}</h3>
        <p className="text-sm text-gray-400">{duration}</p>
        <p className="text-lg text-white mt-2">{position}</p>
        <p className="text-sm text-gray-400 mb-4">{location}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-sm text-gray-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
