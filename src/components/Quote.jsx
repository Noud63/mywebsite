import React from "react";

const Quote = ({ text, name, url }) => {
  return (
    <article className="flex flex-col justify-center items-center py-12 border-b border-t border-blue-950 max-xsm:mx-2 gap-2 max-sm:py-8 max-mobile:mx-2">
      <dt className="text-blue-950 text-xl max-sm:text-lg text-center px-4 whitespace-pre-line">
        {text}
         </dt>
        <dd>
 {url ? <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "underline" }}
        >
          <span className="text-lg font-semibold max-sm:text-[15px]">
            {name}
          </span>
        </a> : <span className="text-lg font-semibold max-sm:text-[15px] underline">
            {name}
          </span>}
        </dd>
       
     
    </article>
  );
};

export default Quote;
