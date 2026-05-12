import React from "react";

import Intro from "./Intro";
import ArrowsAndDiscoball from "./ArrowsAndDiscoball";
import Discoball from "../Discoball";

const IntroSection = () => {
  return (
    
      <div className="contentBody bg-white flex flex-col">
        
        <Intro />
        <ArrowsAndDiscoball />
      </div>
    
  );
};

export default IntroSection;
