import React from "react";

const DamienHirst = ({ img }) => {
  return (
    <div className="w-full bg-black pb-14 pt-4 my-4">
      <div className="flex flex-col items-center justify-center text-white leading-[1.6] p-[18px] max-sm:p-[12px] max-sm:p-0 border-b border-white mx-4">
        <span className="text-2xl font-bold text-white max-sm:text-xl">
          Damien Hirst
        </span>
        <span className="text-lg text-white max-sm:text-[16px]">
          "For the Love of God"
        </span>
      </div>
      <div className="w-full h-auto ">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col text-white px-16 text-xl gap-y-4 max-sm:text-lg max-sm:px-8">
        <p>
          For the Love of God is a sculpture by artist Damien Hirst produced in
          2007. It consists of a platinum cast of an 18th-century human skull
          encrusted with 8,601 flawless diamonds, including a pear-shaped pink
          diamond located in the forehead that is known as the Skull Star
          Diamond.
        </p>

        <p>
          In 2007, art historian Rudi Fuchs described the work as "out of this
          world, celestial almost. It proclaims victory over decay. At the same
          time it represents death as something infinitely more relentless.
          Compared to the tearful sadness of a vanitas scene, the diamond skull
          is glory itself. According to BBC,the production cost of “For the Love
          of God” reached around £14 million, making it one of the most
          expensive artworks ever created.
        </p>
      </div>
    </div>
  );
};

export default DamienHirst;
