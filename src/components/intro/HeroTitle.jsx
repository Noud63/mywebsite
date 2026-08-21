import React from "react";

const HeroTitle = () => {
  return (
    <header className="flex w-full bg-gradient-to-r from-black via-slate-700 to-black text-slate-300 items-start mb-0 max-lg:mb-0 max-mobile:px-2 border-t-2 border-dotted border-slate-300">
      <h1 className="w-full flex py-2 text-4xl font-medium font-serif  
      max-md:text-3xl max-sm:text-xl max-sm:font-semibold max-xxsm:text-lg">
        <span className="">/ NOUD VAN DUN </span>
        <span className="">/ PAINTINGS /</span>
        <span className="max-md:hidden">.....</span>
        <span className="max-lg:hidden pl-2">AND MORE /</span>
      </h1>
    </header>
  );
};

export default HeroTitle;