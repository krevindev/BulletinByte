import React from "react";
// import dgLogo from "../../../assets/images/daily-guardian-logo.svg";
import Image from "next/image";

const sourcesData = [
  {
    name: "Daily Guardian",
    imgSrc: "daily-guardian-logo.svg",
  },
  {
    name: "Panay News",
    imgSrc: "panay-news-logo.svg",
  },
  {
    name: "Visayan Daily Star",
    imgSrc: "visayandailystar-logo.svg",
  },
  {
    name: "Bombo Radyo Iloilo",
    imgSrc: "bomboradyoiloilo-logo.svg",
  },
  {
    name: "Daily Guardian",
    imgSrc: "visayandailystar-logo.svg",
  },
  {
    name: "Daily Guardian",
    imgSrc: "visayandailystar-logo.svg",
  },
  {
    name: "Daily Guardian",
    imgSrc: "visayandailystar-logo.svg",
  },
];

const SourceCard = ({ name, imgSrc }) => {
  return (
    <div className="bg-[#242732] min-h-[100px] min-w-[300px] m-3 rounded-xl flex flex-col justify-center items-start p-5 text-[#DBDBDB] transition-all ease-in-out duration-500 border-[1px] border-[rgba(0,0,0,0)] hover:border-[#DBDBDB]">
      {/* Head */}
      <div className="flex w-full items-center">
        <Image
          className="h-full"
          width={60}
          height={40}
          src={`assets/images/${imgSrc}`}
          alt="source-logo"
        />
        <div className="h-[1px] w-[90%] mx-3 bg-[#454956]"></div>
      </div>
      {/* Body */}
      <h1 className="pt-5 text-2xl">{name}</h1>
      <p className="font-light text-[16px]">5 Latest News</p>
      <div className="mt-5 z-10">
        <button className="bg-[#5C668D] mr-2 px-5 py-2 rounded-md text-xs cursor-pointer hover:translate-y-[-1px] transition-all ease-in">
          View Updates
        </button>
        <button className="bg-[#3E4356] mr-5 px-5 py-2 rounded-md text-xs cursor-pointer hover:translate-y-[-1px] transition-all ease-in">
          View Site
        </button>
      </div>
    </div>
  );
};

const SourcesContent = () => {
  return (
    <div className="flex flex-wrap">
      {sourcesData.map((sourceData, ind) => (
        <SourceCard
          key={ind}
          name={sourceData.name}
          imgSrc={sourceData.imgSrc}
        />
      ))}
    </div>
  );
};

export default SourcesContent;
