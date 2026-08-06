import React from "react";

const HeroTitle = () => {
  return (
    <div className="flex w-full bg-gradient-to-r from-black via-slate-700 to-black text-slate-300 items-start mb-0 max-lg:mb-0 max-mobile:px-2 border-t-2 border-dotted border-slate-300">
      <div className="w-full flex py-2 text-4xl font-medium font-serif  
      max-md:text-3xl max-sm:text-xl max-sm:font-semibold max-xxsm:text-lg">
        <div className="">/ NOUD VAN DUN </div>
        <div className="">/ PAINTINGS /</div>
        <div className="max-md:hidden">.....</div>
        <div className="max-lg:hidden pl-2">AND MORE /</div>
      </div>
    </div>
  );
};

export default HeroTitle;