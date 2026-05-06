import React from "react";

const Discoball = ({ image }) => {
  return (
    <div className="flex justify-center my-10">
      <img
        src={image || "/images/discoballpara.png"}
        alt="discoball"
        className="w-[32px] max-md:w-[25px] "
      />
    </div>
  );
};

export default Discoball;
