import React from "react";
import Avatar from "./Avatar";
import companyOneLogo from "@/assets/company_one_logo.png"
import companyTwoLogo from "@/assets/company_two_logo.png"
import companyThreeLogo from "@/assets/company_three_logo.png"
import ExperienceCard from "./ExprienceCard";
import Image from "next/image";

const Workspace: React.FC = () => {
  return (
    <section id="profile-overview" className="flex flex-col items-center mt-10">
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl font-semibold">Profile</h1>
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text text-center">
          Overview
        </h1>
        {/* <Image src={companyOneLogo} alt="" width={20} height={20}/> */}
      </div>
      <div className="w-full max-w-2xl mt-12">
        <ExperienceCard
          company="Company One"
          duration="Jan 2023 - Present"
          position="Senior UI/UX Designer"
          location="Remote"
          tags={["UI Design", "UX Research", "Figma", "React"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          logo={companyOneLogo}
        />
        <ExperienceCard
          company="Company Two"
          duration="May 2022 - Dec 2022"
          position="Frontend Developer"
          location="New York, USA"
          tags={["JavaScript", "Tailwind CSS", "Vue.js"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          logo={companyTwoLogo}
        />
        <ExperienceCard
          company="Company Three"
          duration="Jan 2021 - Apr 2022"
          position="Web Developer"
          location="San Francisco, USA"
          tags={["HTML", "CSS", "JavaScript", "Node.js"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          logo={companyThreeLogo}
        />
      </div>
    </section>
  );
};

export default Workspace;
