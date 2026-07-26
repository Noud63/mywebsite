import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex max-xsm:px-0 relative overflow-hidden justify-center">
      <img src="/images/questioneverything_2.png" alt="noud van dun" className="w-full max-xsm:w-[130%] max-xsm:max-w-none" />
      <div className="flex justify-between absolute bottom-5 right-5 gap-2 max-sm:bottom-3 max-sm:right-3">
          <Link to={path === "/about" ? "/" : "/about"}>
        {" "}
        <div className="flex items-center justify-center text-slate-300 text-md 
        border-2 border-slate-300 font-semibold w-[100px] rounded-full max-sm:px-3 max-sm:bottom-2 max-sm:right-2 max-xsm:w-[90px]">
          {path === "/about" ? "Back" : "About"}
        </div>
      </Link>
      <Link to={path === "/contact" ? "/" : "/contact"}>
        {" "}
        <div className="flex items-center justify-center text-slate-300 text-md 
        border-2 border-slate-300 font-semibold w-[100px] rounded-full max-sm:px-3 max-sm:bottom-2 max-sm:right-2 max-xsm:w-[90px]">
          {path === "/contact" ? "Back" : "Contact"}
        </div>
      </Link>
      </div>
      
    </div>
  );
};

export default Hero;