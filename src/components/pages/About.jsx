import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[300px] mt-12 text-blue-950 max-sm:px-2 text-center max-sm:mt-8">
      <div className="w-full flex max-w-[900px] flex-col ">
        <div className="border-b border-blue-950 pb-4 text-center text-3xl max-sm:text-2xl">
          <span>What it's al about?</span>
        </div>

        <div className="w-full flex flex-col text-xl pt-4 gap-y-4  max-sm:text-lg">
          <p>
            Not a regular summary of works made over a period of time by an
            artist, but a selection of my work, expanded with
            artistic/philosophical quotes and artworks from the history of
            modern art that test the very limits of modern art itself. The
            centerpiece of these experiments is, of course, Marcel Duchamp’s
            Fountain from 1917. In addition, I have included several works with
            similar intentions by famous artists such as Maurizio Cattalan,
            Damien Hirst, Banksy and others. One could say it resembles “The
            Emperor’s New Clothes,” since Duchamp’s intellectual statement
            already encompasses it all. The boundaries had already been set;
            nevertheless, they were still able to shake the art world to its
            core.
          </p>
          <p className="text-sm">
            (Note: For convenience, I use “modern art” as an umbrella term that
            includes contemporary art as well.)
          </p>
        </div>
      </div>
      <div className="mt-20">
        <Link
          to="/"
          className="cursor-pointer border border-blue-950 px-10 py-2 rounded-full bg-blue-950 text-white text-xl tracking-wide max-sm:py-1 max-sm:px-8"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default About;
