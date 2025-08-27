"use client";

import Image from "next/image";
import React, { useState } from "react";

const TopNewsCard = ({ isMain }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`relative min-h-[150px] rounded-xl p-5 flex flex-col-reverse overflow-hidden ${
        isMain && "col-span-2 row-span-2"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background image with zoom effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out ${
          isHovering ? "scale-110" : "scale-100"
        }`}
        style={{
          backgroundImage: `url(/assets/images/grassfield.jpg)`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#242732]/70 to-[#1E1F29]/9" />

      {/* Bottom fade gradient */}
      <div className="absolute bg-gradient-to-t from-[#1E1F29] w-full h-[50%] bottom-0 left-0" />

      {/* Content */}
      <div className="absolute left-10 bottom-10 flex z-10">
        <Image
          width={30}
          height={30}
          src="/assets/logos/daily-guardian-logo.svg"
          alt="logo"
          className="mr-5"
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-bold tracking-wide">
            Lorem ipsum dolor sit amet
          </h4>
          <p className="font-light">sit emet dolor lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
};

const TopNewsContent = () => {
  return (
    <div className="min-h-fit h-[60vh] grid md:grid-cols-4 grid-flow-row-dense gap-2.5 box-border">
      <TopNewsCard isMain />
      <TopNewsCard />
      <TopNewsCard />
      <TopNewsCard />
      <TopNewsCard />
    </div>
  );
};

export default TopNewsContent;
