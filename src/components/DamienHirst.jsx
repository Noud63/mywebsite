import React from "react";

const DamienHirst = ({ image, name, title, year }) => {
  return (
    <article className="bg-black pb-14 max-mobile:mx-2">
      <header className="flex flex-col items-center justify-center text-white leading-[1.6] p-[18px] max-sm:p-[12px] max-sm:p-0 border-b border-white mx-4 py-6">
        <span className="text-2xl font-bold text-white max-sm:text-xl">
          {name}
        </span>
        <span className="text-lg text-white max-sm:text-[16px]">
          "{title}" {year}
        </span>
      </header>
      <figure className="w-full h-auto ">
        <img src={image} alt="" loading="lazy"/>
      </figure>
      <section className="flex flex-col text-white px-16 text-xl gap-y-4 max-sm:text-lg max-sm:px-6">
        <p>
          For the Love of God is a sculpture by artist Damien Hirst produced in
          2007. It consists of a platinum cast of an 18th-century human skull
          encrusted with 8,601 flawless diamonds, including a pear-shaped pink
          diamond located in the forehead that is known as the Skull Star
          Diamond.
        </p>

        <p>
          In 2007, art historian Rudi Fuchs described the work as "out of this
          world, celestial almost. It proclaims victory over decay. At the same
          time it represents death as something infinitely more relentless.
          Compared to the tearful sadness of a vanitas scene, the diamond skull
          is glory itself. According to BBC,the production cost of “For the Love
          of God” reached around £14 million, making it one of the most
          expensive artworks ever created.<br />Despite a 2007 announcement claiming
          a £50 million ($100 million) sale. Hirst revealed in 2022 that he
          still owns the piece along with his gallery, White Cube, and other
          investors, and it has remained in storage in London.
        </p>
      </section>
    </article>
  );
};

export default DamienHirst;
