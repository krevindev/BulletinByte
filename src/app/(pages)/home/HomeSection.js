import React from "react";

const HomeSection = ({ title }) => {
  return (
    <div className="w-full h-fit min-h-[200px] py-5">
      {/* Title/Header */}
      <div className="flex justify-center items-center">
        <div className="bg-yellow-400 px-7 py-1 w-fit min-w-fit rounded-md">
          <h1 className="text-black font-bold uppercase tracking-wider">{title}</h1>
        </div>
        <div className="h-[1px] w-[90%] bg-[rgb(51,52,66)] mx-5" />
      </div>

      {/* Contents */}
      <div className="bg-red-200 w-full">
        <h5>Placeholder</h5>
      </div>
    </div>
  );
};

export default HomeSection;
