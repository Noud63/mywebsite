import React from "react";

const Discoball = ({ image }) => {
  return (
    <div className="flex justify-center h-auto my-10">
      <img
        src={image}
        alt="discoball"
        className="w-[4%] max-md:w-[6%] max-xsm:w-[8%] "
      />
    </div>
  );
};

export default Discoball;
