import React from "react";

const Blobs = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-20 bg-black">
      <div className="relative w-full h-full overflow-hidden blur-3xl">
        <div className="blob bg-gradient-to-r from-blue-500 to-blue-800"></div>
        <div className="blob bg-gradient-to-r from-green-500 to-blue-500"></div>
        <div className="blob bg-gradient-to-r from-orange-500 to-orange-600"></div>
      </div>
    </div>
  );
};

export default Blobs;
