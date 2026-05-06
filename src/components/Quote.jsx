import React from "react";

const Quote = ({ text, name, url }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 border-b border-t border-blue-950 my-4 max-xsm:mx-2 gap-4">
      <span className="max-sm:text-[14px] text-[18px] px-8 text-center">
        {text}
        <br />
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "underline" }}
        >
          <span className="text-lg font-semibold max-sm:text-[15px]">
            {name}
          </span>
        </a>
      </span>
    </div>
  );
};

export default Quote;
