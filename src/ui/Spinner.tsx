import React from "react";

function Spinner() {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-[#0A192F] backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-4 border-indigo-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-white font-medium">Loading ...</p>
      </div>
    </div>
  );
}

export default Spinner;
