import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const PaintingInfoOverlay = ({ id, closeOverlay, open }) => {
  const painting = data.find((p) => p.id === id);

  return (
    <div
      className={`overlay text-black flex flex-col justify-center items-center absolute inset-0 bg-neutral-300/80
        transition-[transform, opacity] duration-500 ease-out ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"}`}
      onClick={() => closeOverlay(false)}
    >
      <div
        className="relative infobox w-[60%] h-[55%] flex justify-center flex-col items-center bg-linear-to-t from-neutral-300 to-white p-8 rounded-xl 
      max-lg:w-[90%] max-lg:h-[80%] max-xsm:w-full max-xsm:h-full max-xsm:p-4 border-b-1 border-stone-500 max-sm:h-[90%]"
      >
        <div className="flex flex-col items-center border-b border-black pb-2 mb-2">
          <div className="w-full flex justify-center text-xl font-normal border-b border-black mb-2 pb-2 max-sm:text-lg">
            {painting?.title}
            <span className="ml-2 font-normal">({painting?.year})</span>
          </div>
          <span className={`text-center max-sm:text-lg`}>{painting?.title_long}</span>
          <span className="max-sm:text-sm">{painting?.technique}</span>
          <span className="max-sm:text-sm">{painting?.size}</span>
        </div>
        <div className="absolute bottom-2 text-sm text-gray-600 max-sm:text-[10px]">&copy;noud van dun</div>
      </div>
        
    </div>
  );
};

export default PaintingInfoOverlay;
