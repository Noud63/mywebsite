import React from "react";
import Hero from "./Hero";
import HeroTitle from "./HeroTitle";
import Intro from "./Intro";
import ArrowsAndDiscoball from "./ArrowsAndDiscoball";

const IntroSection = () => {
  return (
    
      <div className="contentBody bg-white flex flex-col">
        <Hero />
        <HeroTitle />
        <Intro />
        <ArrowsAndDiscoball />
      </div>
    
  );
};

export default IntroSection;
