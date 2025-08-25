import React from "react";

const TopNewsCard = ({ isMain }) => {
  return (
      <div
        className={` min-h-[150px] rounded-xl p-5 flex flex-col-reverse *: ${
          isMain && "col-span-2 row-span-2"
        } bg-gradient-to-b from-[#242732] to-[#1E1F29]`}
      >
      <div>
        <h4 className="text-xl font-bold tracking-wide">Lorem ipsum dolor sit amet</h4>
        <p className="font-light">sit emet dolor lorem ipsum...</p>
      </div>
    </div>
  );
};

const TopNewsContent = () => {
  return (
    <div className="min-h-fit grid md:grid-cols-4 grid-flow-row-dense gap-2.5 box-border ">
      <TopNewsCard isMain />
      <TopNewsCard />
      <TopNewsCard />
      <TopNewsCard />
      <TopNewsCard />
    </div>
  );
};

export default TopNewsContent;
