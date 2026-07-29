import React from "react";

const Duchamp = ({ image, url, name, year, title }) => {
  return (
    <div  className="max-mobile:px-2">
      <div className="flex flex-col text-center bg-black py-6 text-white">
        <span className="text-2xl max-sm:text-xl">{name}</span>
        <span className="text-lg max-sm:text-sm">"{title}" {year}</span>
      </div>
      <div className="w-full bg-black">
        <img src={image} alt="duchamp" loading="lazy"/>
      </div>
      <div className="flex flex-col bg-black text-xl text-white px-16 pt-12 pb-14 max-sm:text-lg max-sm:px-4 gap-y-4">
        <p>
          Duchamp destroys the stable historical referent by detaching a urinal
          from its commonly understood function. This piece questions the very
          nature of art and representation. It demonstrated that the setting, a
          gallery or museum, and the artist’s designation are what define an
          object as art, rather than its inherent physical beauty or form.
          Fountain was an audacious experiment, designed to test the limits of
          art.
        </p>
        <p>
          In 2004 'Fountain' was declared the most influential artwork of the
          20th century. Sixteen replicas were commissioned from Duchamp in the
          1950s and 1960s and made to his approval. There are rumours that the
          urinal was in fact not created by Marcel Duchamp?{" "}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read this:{" "}
          <span className="border-b border-white">
            The iconic fountain 1917 is not created by marcel duchamp!?
          </span>
        </a>
      </div>
    </div>
  );
};

export default Duchamp;
