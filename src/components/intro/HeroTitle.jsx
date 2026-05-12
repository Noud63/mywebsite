import React from "react";

const HeroTitle = () => {
  return (
    <div className="flex w-full bg-white items-start mb-0 max-lg:mb-0 max-xsm:pl-0">
      <div className="w-full flex py-2 text-4xl font-medium font-serif text-blue-950 border-b border-blue-950 max-md:text-3xl max-sm:text-xl max-sm:font-semibold max-xsm:text-xl max-xxsm:text-[18px] max-xsm:pl-1">
        <div className="">/ NOUD VAN DUN </div>
        <div className="">/ PAINTINGS /</div>
        <div className="max-lg:hidden">.....AND MORE /</div>
      </div>
    </div>
  );
};

export default HeroTitle;
