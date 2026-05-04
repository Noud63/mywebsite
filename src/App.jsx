import React, { useState, useEffect } from "react";
import { registry } from "./registry";
import data from "../data.json";
import Header from "./components/intro/Hero";
import IntroSection from "./components/intro/IntroSection";

function RenderContent({ data }) {
  return data.map((item, index) => {
    const { type, ...props } = item;
    // console.log("registry keys:", Object.keys(registry));
    const Component = registry[type];

    if (!Component) {
      console.warn(`Unknown type: ${type}`);
      return null;
    }

    return <Component key={index} {...props} />;
  });
}

function App() {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 2000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);

    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, [window.pageYOffset]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="relative">
      <div className="flex flex-row max-w-[1150px] mx-auto mb-40">
        <div className="bg-repeat-y w-full max-w-[4.8%] bg-[url(/images/ringbinder2.png)] bg-right bg-contain max-xsm:hidden" />

        <div className="contentbody bg-white flex flex-col pr-4 max-xsm:px-0">
          <IntroSection />
          <RenderContent data={data} />
        </div>
      </div>
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 z-999 w-[50px] h-[50px] border-2 border-[#b09a8d] rounded-full flex justify-center items-center bg-white max-sm:w-[40px] max-sm:h-[40px] ">
          <button
            type="button"
            onClick={() => scrollToTop()}
            className="w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px] cursor-pointer"
          >
            <img
              src="images/totop.png"
              alt="totop"
              className=""
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
