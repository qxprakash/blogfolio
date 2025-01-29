import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center mt-10 mb-16 lg:mb-12"
    >
      <div className="flex items-center space-x-2 mb-10">
        <h1 className="text-4xl font-semibold">Featured</h1>
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 text-transparent bg-clip-text text-center">
          Projects
        </h1>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <ProjectCard
          title="state.rs"
          description="A minimal blockchain-style state machine implementation showcasing account management, transaction processing, and state transitions."
          language="Rust"
          stars={3}
          forks={0}
          link="https://github.com/qxprakash/state.rs"
        />
        <ProjectCard
          title="Blogfolio"
          description="A modern portfolio website with an integrated blog system built with Next.js 14 and MDX."
          language="TypeScript"
          stars={1}
          forks={0}
          link="https://github.com/qxprakash/blogfolio"
        />
        <ProjectCard
          title="Neural Nets"
          description="Code examples from Andrej Karpathy's Hacker's Guide to Neural Networks, implemented in JavaScript for self-learning."
          language="JavaScript"
          stars={2}
          forks={0}
          link="https://github.com/qxprakash/neural-nets"
        />
      </div>
    </section>
  );
};

export default Projects;
