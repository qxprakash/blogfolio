import React from "react";
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
    <div className="flex items-start  relative">
      {/* Vertical line and logo */}
      <div className="absolute left-6 w-0.5 z-10 h-full bg-gradient-to-b from-purple-500 to-transparent overflow-hidden">
        <div className="h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-flow"></div>
      </div>

      <div className="relative flex flex-col items-center mr-2">
        <div className="z-10 border-x-4 border-y-8  border-black rounded-lg">
          <Image
            src={logo}
            alt={`${company} Logo`}
            width={40}
            height={40}
            className="object-cover w-10 h-10 rounded-lg"
          />
        </div>
      </div>

      {/* Experience details */}
      <div className="pt-1 pl-6 pr-6 pb-6 rounded-lg shadow-lg  w-4/5">
        <h3 className="text-xl font-semibold text-white">{company}</h3>
        <p className="text-sm text-gray-400">{duration}</p>
        <p className="text-lg text-white mt-2">{position}</p>
        <p className="text-sm text-gray-400 mb-4">{location}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-sm text-gray-300 px-2 py-1 rounded-full"
            >
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
