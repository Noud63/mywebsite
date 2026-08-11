import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";
import PaintingInfoOverlay from "./PaintingInfoOverlay";

const Painting = ({ title, image, thumbs, bgstyle, id, cluster, year }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [openCloseOverlay, setOpenCloseOverlay] = useState(false);

  const slides = thumbs.map((t) => ({
    src: t.full,
  }));

  return (
    <div
      className={`max-mobile:mx-2 max-sm:pb-0  ${thumbs.length > 0 ? "border-b border-blue-950" : ""}`}
    >
      <div className="flex flex-col gap-1 justify-between items-center text-blue-950 font-normal tracking-wider font-serif py-2 border-t border-b border-blue-950 max-sm:text-xl">
        {cluster && (
          <div className="w-full flex justify-start px-2">
            <div className="flex justify-center pb-[2px] pt-[4px] text-[12px] rounded-full  text-blue-950">{cluster}</div>
            </div>
        )}

        <div className="w-full flex items-center flex-row justify-between text-2xl max-md:text-xl px-2 max-xxsm:text-lg">
<span className="">{id !== "taxonomy" ? title : title.slice(0, 8)}</span>

        <span className="w-10 flex justify-end">{year}</span>
        </div>
        
      </div>
      <div className="bg-white flex justify-center items-center relative mt-4">
        <div className="w-full h-auto relative">
          <img src={image} alt="noud van dun" loading="lazy"/>
          <PaintingInfoOverlay
            id={id}
            closeOverlay={setOpenCloseOverlay}
            open={openCloseOverlay}
          />
        </div>

        <div
          className="absolute right-[2%] bottom-[3%] cursor-pointer z-10"
          onClick={() => setOpenCloseOverlay(!openCloseOverlay)}
        >
          <img
            src={`${id !== "panorama" ? "/images/infowhite.png" : "/images/info3.png"}`}
            alt="noud van dun"
            className="w-[30px] max-sm:w-[20px] infoButton"
          />
        </div>
      </div>
      {thumbs.length > 1 ? (
        <div className="w-full grid grid-cols-4 max-md:grid-cols-2 gap-4 pt-6 pb-6 max-sm:pb-4">
          {thumbs.map((painting, index) => {
            return (
              <div
                className="w-full flex items-center flex-col  cursor-pointer overflow-clip"
                key={index}
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
              >
                <img
                  src={painting.image}
                  className="w-[200px] h-[130px] object-cover detail max-xsm:w-[150px] max-xsm:h-[100px]"
                  alt="noud van dun"
                  loading="lazy"
                />
                <div
                  className={`w-full max-w-[80px] border border-black text-sm text-black rounded-full flex items-center justify-center mt-4 h-[24px] max-sm:w-[100px] max-sm:text-[12px] max-sm:border-none`}
                >
                  {painting.detail}
                </div>
              </div>
            );
          })}
        </div>
      ) : (<div
                className="w-full flex items-center justify-center flex-col cursor-pointer overflow-clip mt-8 mb-8 max-mobile:mb-4"
                key={index}
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
              >
                <img
                  src={thumbs[0]?.image}
                  className="w-[200px] h-auto object-cover detail max-xsm:w-[120px] "
                  alt="noud van dun"
                  loading="lazy"
                />
                <div
                  className={`w-full max-w-[120px] border border-black text-sm text-black rounded-full flex items-center justify-center mt-4 h-[24px] max-sm:w-[100px] max-sm:text-[12px] max-sm:border-none`}
                >
                  {thumbs[0]?.detail}
                </div>
              </div>)}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      />
    </div>
  );
};

export default Painting;
