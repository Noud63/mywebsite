import React from "react";

const ArrowsAndDiscoball = () => {
  return (
    <div className="flex flex-col pl-10 pr-12 pb-10 ">

      <div className="flex justify-between items-center">
        <div className="flex justify-center w-[6%] h-auto max-md:w-[8%] max-xsm:w-[9%]">
          <img src="images/arrow.png" alt="" className="downarrow" />
        </div>
        <div className="flex justify-center text-sm text-gray-800 max-sm:text-[10px]">
        <span>( All paintings with title bar by &copy;noud van dun) </span>
      </div>
        <div className="flex justify-center w-[6%] h-auto max-md:w-[8%] max-xsm:w-[9%]">
          <img src="images/arrow.png" alt="" className="downarrow" />
        </div>
      </div>

      
    </div>
  );
};

export default ArrowsAndDiscoball;
