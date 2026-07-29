import React from "react";

const Magritte = ({ image, name, title, year }) => {
  return (
    <div className="flex w-full h-auto justify-between flex-col text-[#353535] max-sm:px-2" >

      <div className="w-full flex-col justify-between bg-[#f1e2b9] text-black pt-6 pb-4">
        <div className="flex flex-col pb-4 px-4">
          <span
            className="
          font-bold
          text-2xl
          text-black
          "
          >
            {name}
          </span>

          <span
            className="
          text-xl
          text-black
          "
          >
            "{title}" {year}
          </span>
      </div>

      <div className="relative flex w-full h-auto">
        <img src={image} alt="Magritte pipe mobile" className="flex w-full h-auto"/>
      </div>

      

        <article
          className="
        leading-[1.4]
        text-xl
        text-black pb-8 px-4 max-sm:text-lg
      "
        >
          Like the other artists and poets associated with the Surrealist
          movement Magritte sought to overthrow what he saw as the oppressive
          rationalism of bourgeois society. His art during these essential years
          is at times violent, frequently disturbing, and filled with
          discontinuities. He consistently interrogated conventions of language
          and visual representation, using methods that included the misnaming
          of objects, doubling and repetition, mirroring and concealment, and
          the depiction of visions seen in half-waking states-all of them
          devices that cast doubt on the nature of appearances, both in the
          paintings and in reality itself.
        </article>
      </div>

    </div>
  );
};

export default Magritte;
