import React from "react";
import companyOneLogo from "@/assets/bng_logo.png";
import companyTwoLogo from "@/assets/pepcoding.png";
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
          company="BNG Advanced Mobile Solutions"
          duration="Sep 2022 - Present"
          position="Software Engineer"
          location="Remote"
          tags={["Python", "Node.js", "FAST API", "Next.js", "MySQL"]}
          description="Experienced full-stack developer with over 3 years of expertise in designing and deploying AI-driven solutions. Currently working on cutting-edge projects in applied AI, including Generative AI technologies like LLaMA, vLLM, and Stable Diffusion. Proficient in building scalable applications with FastAPI, Node.js, Next.js, Redis, and MySQL, with a strong focus on integrating AI into impactful solutions for global use. Passionate about bridging the gap between AI and business through innovative development and open-source contributions."
          logo={companyOneLogo}
        />
        <ExperienceCard
          company="Pepcoding"
          duration="Aug 2021 - Sep 2022"
          position="Product Engineer and Mentor"
          location="Noida"
          tags={["Node.js", "React", "MongoDB", "MySQL", "Docker"]}
          description="Worked as a Full-Stack Developer at PepCoding, contributing to the development of Nados and optimizing performance across the platform."
          logo={companyTwoLogo}
        />
      </div>
    </section>
  );
};

export default Workspace;
