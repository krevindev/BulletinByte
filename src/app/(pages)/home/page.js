import React from "react";
import HomeSection from "./HomeSection";
import TopNewsContent from "./TopNewsContent";

const Home = () => {
  return (
    <div className="py-10 box-border">
      <HomeSection title="Top News">
        <TopNewsContent />
      </HomeSection>
      <HomeSection title="Sources" />
      <HomeSection title="Top News" />
    </div>
  );
};

export default Home;
