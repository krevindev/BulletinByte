import React from "react";

const HomeSection = ({ title, children }) => {
  return (
    <div className="w-screen h-fit min-h-fit pb-16">
      {/* Title/Header */}
      <div className="flex justify-center items-center py-5">
        <div className="bg-yellow-400 px-7 py-1 w-fit min-w-fit rounded-md">
          <h1 className="text-black text-xl font-bold uppercase tracking-wider">
            {title}
          </h1>
        </div>
        <div className="h-[1px] w-[90%] bg-[rgb(51,52,66)] mx-5" />
      </div>

      {/* Contents */}
      <div className="w-full">{!children ? <h5>Placeholder</h5> : children}</div>
    </div>
  );
};

export default HomeSection;
