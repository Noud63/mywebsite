import { useState, useEffect } from "react";
import { registry } from "../../registry";
import data from "../../../data.json";
import IntroSection from "../intro/IntroSection";

function RenderContent({ data: items }) {
  return items.map((item, index) => {
    const { type, ...props } = item;
    // console.log("Properties:", {...props});
    const Component = registry[type];    //registry[painting] = Painting

    if (!Component) {
      console.warn(`Unknown type: ${type}`);
      return null;
    }

    return <Component key={index} {...props} />;
  });
}

// const PAGE_SIZE = 20;

export default function Home() {
  // const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // const visibleItems = data.slice(0, visibleCount); 
  // const hasMore = visibleCount < data.length;

  // function loadMore() {
  //   setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, data.length));
  // }

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollButton(window.scrollY > 2000);
    };

    window.addEventListener("scroll", handleScrollVisibility);

    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="flex max-w-[1150px] mb-40">
        <section className="bg-white flex flex-col max-xsm:px-0">
          <IntroSection />
          <RenderContent data={data} />

          {/* {hasMore && (
            <div className="flex justify-center my-8">
              <button
                type="button"
                onClick={loadMore}
                className="px-6 py-3 border-2 border-[#b09a8d] rounded-full cursor-pointer hover:bg-[#b09a8d]/10"
              >
                Load more ({data.length - visibleCount} remaining)
              </button>
            </div>
          )} */}
        </section>
      </section>
      
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 z-999 w-[50px] h-[50px] border-2 border-[#b09a8d] rounded-full flex justify-center items-center bg-white max-sm:w-[40px] max-sm:h-[40px] ">
          <button
            type="button"
            onClick={() => scrollToTop()}
            className="w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px] cursor-pointer"
          >
            <img src="images/totop.png" alt="totop" className="" />
          </button>
        </div>
      )}
    </>
  );
}
