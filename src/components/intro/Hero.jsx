import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex max-xsm:px-0 relative">
      <img src="/images/questioneverything_2.png" alt="Logo" className="" />
      <Link to="/about"> <div className="absolute flex items-center justify-center bottom-5 right-6 text-slate-300 text-md border-2 border-slate-300 font-semibold px-4 rounded-full ">About</div></Link>
    </div>
  );
};

export default Header;
