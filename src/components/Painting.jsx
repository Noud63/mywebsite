import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";
import PaintingInfoOverlay from "./PaintingInfoOverlay";

const Painting = ({ title, image, thumbs, bgstyle, id }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [openCloseOverlay, setOpenCloseOverlay] = useState(false);

  const slides = thumbs.map((t) => ({
    src: t.full,
  }));

  return (
    <div className="max-md:pb-8 max-xsm:mx-2 max-xsm:pb-2 my-4">
      <div className="flex justify-center text-blue-950 font-normal tracking-wider text-2xl font-serif py-3 border-t border-b border-blue-950">
        {title}
      </div>
      <div className="bg-white flex justify-center items-center relative mt-4">
        <div className="w-full h-auto relative">
          <img src={image} />
          <PaintingInfoOverlay
            id={id}
            closeOverlay={setOpenCloseOverlay}
            open={openCloseOverlay}
          />
        </div>
        
          <div className="absolute right-[2%] bottom-[3%] cursor-pointer z-10" onClick={() => setOpenCloseOverlay(!openCloseOverlay)}>
            <img
              src={`${id !== "panorama" ? "/images/infowhite.png" : "/images/info3.png"}`}
              alt=""
              className="w-[30px] max-sm:w-[20px] infoButton"
            />
           
          </div>
        
      </div>
      {thumbs.length > 0 && <div className="w-full grid grid-cols-4 max-md:grid-cols-2 gap-[8%] py-8 max-sm:gap-10 border-b border-blue-950">
        {thumbs.map((painting, index) => {
          console.log(painting.bgstyle);
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
                src={painting.img}
                className="w-[200px] h-[130px]  object-cover detail"
                alt=""
              />
              <div
                className={`w-full max-w-[120px] border border-black text-sm text-black rounded-full flex items-center justify-center mt-4 h-[24px]`}
              >
                {painting.detail}
              </div>
              </div>
          );
        })}
      </div>}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      />
      
    </div>
  );
};

export default Painting;
