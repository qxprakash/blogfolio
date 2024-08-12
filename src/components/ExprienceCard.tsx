import React from 'react';

interface ExperienceCardProps {
  company: string;
  duration: string;
  position: string;
  location: string;
  tags: string[];
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  duration,
  position,
 location,
  tags,
  description,
}) => {
  return (
    <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
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
  );
};

export default ExperienceCard;
