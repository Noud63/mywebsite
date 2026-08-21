import React from "react";

const ArrowsAndDiscoball = () => {
  return (
    <div className="allpaintings flex flex-col pl-10 pr-12 py-12 text-blue-950 text-xl max-sm:text-lg text-center px-4 max-sm:py-4 max-sm:px-6 max-sm:items-center">
      <div className="flex justify-between">
        <div className="flex justify-center w-[6%] h-auto max-md:w-[8%] max-xsm:w-[9%] max-sm:hidden">
          <img src="images/arrow.png" alt="" className="downarrow" />
        </div>

        <p className="text-center flex justify-center flex-col max-lg:px-8">
          Works by Noud van Dun are identified by the presence of cluster A, B,
          or C in the title bar.
        </p>

        <div className="flex justify-center w-[6%] h-auto max-md:w-[8%] max-xsm:w-[9%] max-sm:hidden">
          <img src="images/arrow.png" alt="" className="downarrow" />
        </div>
      </div>

      <div className="flex justify-center h-[40px] w-[20px] hidden max-sm:flex mt-2">
        <img src="images/arrow_small.png" alt="" className="downarrow" />
      </div>
    </div>
  );
};

export default ArrowsAndDiscoball;
