import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[300px] mt-12 text-blue-950 max-sm:px-2 max-sm:mt-8 max-xsm:mt-4">
      <div className="w-full flex max-w-[900px] flex-col ">
        <div className="border-b border-blue-950 pb-4 text-center text-3xl max-sm:text-2xl">
          <span>What it's all about.</span>
        </div>

        <div className="w-full flex flex-col text-xl pt-4 gap-y-4  max-sm:text-lg">
          <p>
            Not a conventional summary of works produced over a period of time
            by an artist, but rather a selection of my work, expanded with
            artistic and philosophical quotes, alongside artworks from the
            history of modern art that test the very limits of art itself. The
            centerpiece of these experiments is, of course, Marcel Duchamp’s
            Fountain from 1917.
          </p>
          <p>
            In addition, I have included several works with similar intentions
            by renowned artists such as Maurizio Cattelan, Damien Hirst, Banksy,
            and others. One could say it resembles{" "}
            <span className="italic">The Emperor’s New Clothes</span>, since
            Duchamp’s intellectual statement already encompassed it all. The
            boundaries had already been drawn — nothing fundamentally new — yet,
            a century later, such works are still capable of shaking the art
            world to its core. The extreme nature of these artworks may obscure
            their relationship to art history, leading viewers to mistakenly
            perceive them as something new.
            <p>
              
            </p>
          </p>
          <p className="text-sm text-center">
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
