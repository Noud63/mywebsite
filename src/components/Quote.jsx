import React from "react";

const Quote = ({ text, name, url }) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 border-b border-t border-blue-950 my-4 max-xsm:mx-2 gap-4 max-xsm:py-8">
      <span className="text-blue-950 text-xl max-sm:text-lg text-center px-4">
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
