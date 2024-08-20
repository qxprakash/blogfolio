import React from "react";

const TechStackText = () => {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-bold text-white mb-6">
        Tech <span className="text-yellow-500">Stack</span>
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        I have extensive experience working with <span className="text-white font-medium">TypeScript</span>,{" "}
        <span className="text-white font-medium">Node.js</span>, and{" "}
        <span className="text-white font-medium">Python</span>. Currently, I am exploring{" "}
        <span className="text-white font-medium">Rust</span> to expand my expertise in systems programming.
      </p>
      <p className="text-gray-300 text-lg leading-relaxed mt-4">
        I am always eager to learn new technologies and apply them in solving complex challenges.
      </p>
    </div>
  );
};

export default TechStackText;