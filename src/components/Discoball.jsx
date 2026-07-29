import React from "react";

const Discoball = ({ image }) => {
  return (
    <div className="flex justify-center py-10 max-sm:py-6">
      <img
        src={image || "/images/discoballpara.png"}
        alt="discoball"
        className="w-[38px] max-sm:w-[27px] "
      />
    </div>
  );
};

export default Discoball;
