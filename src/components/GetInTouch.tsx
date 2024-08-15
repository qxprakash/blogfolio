import React from "react";

const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto p-8 mt-20 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-white">
        Get <span className="text-yellow-400">in touch</span>
      </h2>
      <p className="text-gray-300 text-center mt-4 leading-relaxed">
        Feel free to <span className="text-white font-medium">contact me</span> if you have any
        questions or suggestions. I am always open to new{" "}
        <span className="text-white font-medium">ideas and opportunities.</span>
      </p>
    </section>
  );
};

export default GetInTouch;
