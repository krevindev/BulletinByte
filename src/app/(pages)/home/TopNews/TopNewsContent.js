"use client"

import Image from "next/image";
import React, { useState } from "react";

const TopNewsCard = ({ isMain }) => {

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className={` min-h-[150px] rounded-xl p-5 flex flex-col-reverse relative transition-all bg-no-repeat bg-center ease-in-out duration-500 bg-size-[100%] overflow-hidden hover:bg-size-[105%] ${
        isMain && "col-span-2 row-span-2"
      } bg-gradient-to-b from-[#242732] to-[#1E1F29]  transition-all ease-in`}
      style={{
        backgroundImage: `url(/assets/images/grassfield.jpg)`,
      }}
    >
      <div className="absolute bg-gradient-to-t from-[#1E1F29] w-full h-[50%] bottom-0 left-0 " />
      <div className="absolute left-10 bottom-10 flex">
        <Image
          width={30}
          height={30}
          src="/assets/logos/daily-guardian-logo.svg"
          alt="logo"
          className="mr-5"
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-bold tracking-wide z-[100]">
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
    <div className="min-h-fit h-[60vh] grid md:grid-cols-4 grid-flow-row-dense gap-2.5 box-border ">
      <TopNewsCard isMain />
      <TopNewsCard />
      <TopNewsCard />
      <TopNewsCard />
      <TopNewsCard />
    </div>
  );
};

export default TopNewsContent;
