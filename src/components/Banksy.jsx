import React from "react";

const Banksy = ({ image, title, name, year }) => {
  return (
    <article className="max-mobile:px-2">
      {/* Header */}
      <header className="
      flex w-full flex-row items-center justify-center border-t border-blue-950"
      >
        <h2 className="flex w-full flex-col items-center justify-center text-[#797979] leading-[1.6]
        p-6 max-sm:p-[12px] max-sm:p-0 bg-black"
        >
          <span className="text-2xl font-bold text-white max-sm:text-xl">
            {name}
          </span>

          <span className="text-lg text-white max-sm:text-[16px]">
            "{title}"
          </span>
        </h2>
      </header>

      {/* Image */}
      <figure className="relative w-full h-auto leading-none"
      >
        <img
          src={image}
          alt="noud van dun"
          className="w-full h-auto"
          loading="lazy"
        />
      </figure>

      {/* Text */}
      <section className="w-full h-auto bg-black text-[#797979] leading-[1.4] text-lg">
        <div className="text-white bg-black px-16 pt-8 pb-14 max-sm:px-4">
          <p className="mb-4 text-xl max-sm:text-lg">
            Love is in the Bin is a 2018 art intervention by Banksy at Sotheby's
            London. According to Sotheby's, it is "the first artwork in history
            to have been created live during an auction." His 2006 painting of
            Girl with Balloon unexpectedly self-destructed immediately after it
            was sold at auction. The damaged painting was later renamed Love is
            in the Bin. It has been on permanent loan to the Staatsgalerie
            Stuttgart since March 2019. In October 2021, it sold at auction for
            £18,582,000 (then equivalent to US$25,327,452 or €21,896,100), a
            record for the artist.
          </p>

          <h3 className="w-full text-xl font-semibold border-b pb-2 mb-2">Original work</h3>

          <p className=" max-sm:text-lg">
            The painting is an adaptation of Banksy's 2002 mural Girl with
            Balloon, rare as a unique work rather than a print. It was given by
            Banksy to a friend shortly after the "Barely Legal" exhibition in
            2006. Banksy has said he prepared the self-destruct mechanism at
            this time in case the work was ever put up for auction.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Banksy;
