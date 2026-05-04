import React from "react";

const Quote = ({ text, name, url }) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 border-b border-t border-blue-950 mb-12 max-xsm:mx-2">
      <span className="max-sm:text-[14px] ">"{text}"</span>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        style={{ textDecoration: "underline" }}
      >
        <span className="text-md font-semibold max-sm:text-[15px]">{name}</span>
      </a>
    </div>
  );
};

export default Quote;
