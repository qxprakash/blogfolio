import React from "react";

const Loading: React.FC = () => {
  setTimeout(() => {
    console.log("Loading...");
  }, 2000);
  return (
    <div>
      <strong>Loading...</strong>
    </div>
  );
};

export default Loading;
