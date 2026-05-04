import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col mb-8 max-lg:border-none max-xsm:px-2">
      <div className="flex flex-row max-lg:flex-col">
        <div className="border-r border-b border-blue-950 p-4 w-[50%] max-lg:w-full max-lg:border-r-0 max-xsm:px-0">
          <span className="font-semibold">Art: </span> refers to the theory,
          human application and physical expression of creativity found in human
          cultures and societies through skills and imagination in order to
          produce objects, environments and experiences.
        </div>

        <div className="border-b border-blue-950 p-4 w-[50%] max-lg:w-full max-xsm:px-0">
          <span className="font-semibold">Perception:</span> (from the Latin
          perceptio, meaning gathering or receiving) is the organization,
          identification, and interpretation of sensory information in order to
          represent and understand the presented information or environment.
        </div>
      </div>

      <div className="flex flex-row max-lg:flex-col">
        <div className="border-r border-b border-blue-950 p-4 w-[50%] max-lg:w-full max-lg:border-r-0 max-lg:border-b max-xsm:px-0">
          <span className="font-semibold">Modern art:</span> includes artistic
          work produced during the period extending roughly from 1860 to 1970.
          The term is usually associated with art in which the traditions of the
          past have been thrown aside in a spirit of experimentation.
        </div>
        <div className="p-4 w-[50%] border-b max-lg:w-full max-lg:border-b max-xsm:px-0">
          <span className="font-semibold">Aesthetics:</span> is a branch of
          philosophy that deals with the nature of beauty and taste, as well as
          the philosophy of art. It examines aesthetic values often expressed
          through judgments of taste.
        </div>
      </div>
    </div>
  );
};

export default Intro;
