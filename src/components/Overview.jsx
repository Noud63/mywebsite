import React from "react";

const Overview = ({ image, alt }) => {
  return (
    <div className="flex justify-center w-full h-auto max-mobile:px-2 relative">
      <img src={image} className="" alt={alt} loading="lazy" />
      <div className="absolute flex items-center justify-center bottom-4 right-4 text-white text-md  px-4 border border-white rounded-full max-md:text-[12px] max-sm:bottom-2 max-sm:right-3">
        Overview
      </div>
    </div>
  );
};

export default Overview;
