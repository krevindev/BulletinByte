import React from "react";
import HomeSection from "./HomeSection";
import TopNewsContent from "./TopNews/TopNewsContent";
import SourcesContent from "./Sources/SourcesContent";

const Home = () => {
  return (
    <div className="py-10 box-border">
      <HomeSection title="Top News">
        <TopNewsContent />
      </HomeSection>
      <HomeSection title="Sources">
        <SourcesContent />
      </HomeSection>
    </div>
  );
};

export default Home;
