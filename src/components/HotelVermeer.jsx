import React from "react";

const HotelVermeer = () => {
  return (
    <div className="my-4  text-black max-xsm:px-2">
      <div className="flex w-full flex-row text-black ">
        {/* Vermeer */}
        <div>
          <img
            src="images/vermeer.jpg"
            alt="noud van dun"
            className="w-full h-auto"
          />

          <div
            className="
        flex flex-col items-center justify-center border-r  border-b border-black
        text-black
        px-4 py-4
        leading-[1.4]
      "
          >
            <span className="text-xl max-sm:text-lg">
              Johannes Vermeer
            </span>

            <span className="text-center text-sm max-sm:text-[12px]">
              The Allegory of Painting 1667
            </span>
          </div>
        </div>

        {/* HOTEL */}
        <div>
          <img
            src="images/hotelcurtain.jpg"
            alt="noud van dun"
            className="w-full h-auto"
          />

          <div
            className="
        flex flex-col items-center justify-center border-b border-black
        px-4 py-4
        leading-[1.4]
      "
          >
            <span className="text-center text-xl max-sm:text-lg">
              H.O.T.E.L
            </span>

            <span className="text-sm max-sm:text-[12px]">
              extracted detail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelVermeer;
