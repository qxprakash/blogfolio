import React from "react";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-9/12 mx-auto mt-20 mb-20">
      <h2 className="text-4xl font-semibold text-white">
        Tech <span className="text-yellow-500">Stack</span>
      </h2>
      <p className="text-gray-400 text-center mt-4">
        I have extensive experience working with <span className="text-white font-medium">TypeScript</span>,{" "}
        <span className="text-white font-medium">Node.js</span>, and{" "}
        <span className="text-white font-medium">Python</span>. Currently, I am exploring{" "}
        <span className="text-white font-medium">Rust</span> to expand my expertise in systems programming.
        I am always eager to learn new technologies and apply them in solving complex challenges.
      </p>
    </section>
  );
};

export default ContactSection;
