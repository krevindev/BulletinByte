import React from "react";

const HomeSection = ({ title }) => {
  return (
    <div className="bg-black w-full h-fit min-h-[300px]">
      {/* Title/Header */}
      <div className="">
        <div className="bg-yellow-500">
          <h1>{title}</h1>
        </div>
      </div>

      {/* Contents */}
      <div>
        <h5>SLDJF:</h5>
      </div>
    </div>
  );
};

export default HomeSection;
