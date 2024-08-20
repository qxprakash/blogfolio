import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col items-center mt-10 mb-16 lg:mb-12">
      <div className="flex items-center space-x-2 mb-10">
        <h1 className="text-4xl font-semibold">Featured</h1>
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 text-transparent bg-clip-text text-center">
          Projects
        </h1>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <ProjectCard
          title="Slashboard Desktop"
          description="A simple and convenient dashboard to monitor the activity and performance of your home servers."
          language="TypeScript"
          stars={259}
          forks={14}
          link="#"
        />
        <ProjectCard
          title="The Pyos Project"
          description="An orbital mechanics simulator, entirely coded in Python, which uses the panda3D engine."
          language="Python"
          stars={70}
          forks={11}
          link="#"
        />
        <ProjectCard
          title="WeatherApp"
          description="A real-time weather forecasting application that provides weather updates and alerts."
          language="JavaScript"
          stars={150}
          forks={30}
          link="#"
        />
        <ProjectCard
          title="Budget Tracker"
          description="A personal finance management tool to track expenses, income, and savings goals."
          language="React"
          stars={90}
          forks={20}
          link="#"
        />
      </div>
    </section>
  );
};

export default Projects;