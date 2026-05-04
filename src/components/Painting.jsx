import React from "react";

const Painting = ({ title, image, thumbs, bgstyle }) => {
  return (
    <div className="border-b border-blue-950 max-md:pb-8 max-xsm:mx-2 max-xsm:pb-2">
      <div className="flex justify-center text-blue-950 font-normal tracking-wider text-2xl font-serif py-3 border-t border-b border-blue-950">
        {title}
      </div>
      <div className="bg-white flex justify-center items-center relative mt-4">
        <div className="w-full h-auto">
          <img src={image} />
        </div>
        <div
          className="absolute right-[2%] bottom-[3%] cursor-pointer"
          onClick={() => console.log("Clicked")}
        >
          <img
            src="/images/infowhite.png"
            alt=""
            className="w-[30px] max-sm:w-[20px]"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 max-md:grid-cols-2 gap-[8%] py-8 max-sm:gap-10 ">
        {thumbs.map((painting, index) => {
          console.log(painting.bgstyle);
          return (
            <div className="w-full flex items-center flex-col  cursor-pointer" key={index}>
              <img
                src={painting.img}
                className="w-[200px] h-[130px]  object-cover overflow-hidden detail"
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
      </div>
    </div>
  );
};

export default Painting;
