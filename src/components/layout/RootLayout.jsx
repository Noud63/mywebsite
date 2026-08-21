import { Outlet } from "react-router-dom";
import Hero from "../intro/Hero";
import HeroTitle from "../intro/HeroTitle";
import Footer from "../Footer";

export default function RootLayout() {
  return (
    <>
      <div className="w-full px-5 max-mobile:px-0">
        <div className="flex flex-row max-w-[1150px] mx-auto mb-40">
        <div className="bg-repeat-y w-full max-w-[55px] bg-[url(/images/ringbinder2.png)] bg-right bg-contain max-mobile:hidden max-lg:max-w-[40px]"  />

        <div className="contentbody bg-white flex flex-col pr-4 max-sm:pr-2 max-mobile:pr-0">
        <Hero />
        <HeroTitle />
        <main className="flex flex-col max-sm:pr-2 max-mobile:px-0">
             <Outlet />
        </main>
       
        <Footer />
        </div>
      </div>
      </div>
    </>
  );
}
