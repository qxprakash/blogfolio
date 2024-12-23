import React from "react";
import companyOneLogo from "@/assets/bng_logo.png";
import companyTwoLogo from "@/assets/gsoc_logo.png";
import companyThreeLogo from "@/assets/pepcoding.png";

import Image from "next/image";
import ExperienceCard from "./ExpreienceCard";

const Workspace: React.FC = () => {
  return (
    <section id="profile-overview" className="flex flex-col items-center mt-10">
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl font-semibold">Profile</h1>
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text text-center">
          Overview
        </h1>
      </div>
      <div className="w-full max-w-2xl mt-12">
        <ExperienceCard
          company="BNG Advanced Mobile Solutions"
          duration="Sep 2022 - Present"
          position="Software Engineer"
          location="Remote"
          tags={["Python", "Node.js", "FAST API", "Next.js", "MySQL"]}
          description="At BNG Advanced Mobile Solutions, I lead Generative AI initiatives, architecting a voice assistant platform handling 4M+ daily requests across five OPCOs. I specialize in end-to-end product development, addressing latency, cost, and multilingual challenges, and have created 50+ POCs to drive AI adoption. My technical expertise spans FastAPI, Node.js, Next.js, Redis, and MySQL, enabling scalable, business-aligned solutions."
          logo={companyOneLogo}
        />
        <ExperienceCard
          company="Google Summer Of Code"
          duration="Mar 2024 - Aug 2024"
          position="Contributor"
          location="Remote"
          tags={["Node.js", "C++", "Typescript", "Docker"]}
          description="During Google Summer of Code 2024, I contributed to Intel’s OpenVINO project by enhancing its Node.js bindings, implementing tensor operations and model APIs to improve usability for AI tasks. I developed API samples like OCR and Vision Background Removal and resolved a critical infer request bug , which occured when models ouput layer didn't have any default name."
          logo={companyTwoLogo}
        />
        <ExperienceCard
          company="Pepcoding"
          duration="Aug 2021 - Sep 2022"
          position="Product Engineer and Mentor"
          location="Noida"
          tags={["Node.js", "React", "MongoDB", "MySQL", "Docker"]}
          description="Worked as a Full-Stack Developer at PepCoding, contributing to the development of Nados and optimizing performance across the platform."
          logo={companyThreeLogo}
        />
      </div>
    </section>
  );
};

export default Workspace;
