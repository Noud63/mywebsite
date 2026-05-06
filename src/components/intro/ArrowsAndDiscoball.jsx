import React from "react";

const ArrowsAndDiscoball = () => {
  return (
    <div className="allpaintings flex flex-col pl-10 pr-12 py-8 ">

      <div className="flex justify-between items-center">
        <div className="flex justify-center w-[6%] h-auto max-md:w-[8%] max-xsm:w-[9%]">
          <img src="images/arrow.png" alt="" className="downarrow" />
        </div>
        <div className="text-center flex justify-center text-[17px] text-gray-800 max-sm:text-[14px]">
        <span>All paintings with title bar by: <br /><span className="text-lg font-semibold  max-sm:text-[16px]">&copy;Noud van Dun </span></span>
      </div>
        <div className="flex justify-center w-[6%] h-automax-md:w-[8%] max-xsm:w-[9%]">
          <img src="images/arrow.png" alt="" className="downarrow" />
        </div>
      </div>

      
    </div>
  );
};

export default ArrowsAndDiscoball;
