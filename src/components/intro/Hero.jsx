import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex max-xsm:px-0 relative">
      <img src="/images/questioneverything_2.png" alt="noud van dun" className="" />
      <Link to={path === "/about" ? "/" : "/about"}>
        {" "}
        <div className="absolute flex items-center justify-center bottom-5 right-6 text-slate-300 text-md border-2 border-slate-300 font-semibold px-4 rounded-full max-sm:px-3 max-sm:bottom-2 max-sm:right-2">
          {path === "/about" ? "Back" : "About"}
        </div>
      </Link>
    </div>
  );
};

export default Hero;
