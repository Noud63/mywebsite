import { Outlet } from "react-router-dom";
import Hero from "../intro/Hero";
import HeroTitle from "../intro/HeroTitle";
import Footer from "../Footer";

export default function RootLayout() {
  return (
    <>
      <div className="w-full px-[20px] max-xsm:px-0">
        <div className="flex flex-row max-w-[1150px] mx-auto mb-40">
        <div className="bg-repeat-y w-full max-w-[55px] bg-[url(/images/ringbinder2.png)] bg-right bg-contain max-xsm:hidden max-lg:max-w-[40px]"  />

        <div className="contentbody bg-white flex flex-col pr-4 max-xsm:px-0">
        <Hero />
        <HeroTitle />
        <Outlet />
        <Footer />
        </div>
      </div>
      </div>
    </>
  );
}
