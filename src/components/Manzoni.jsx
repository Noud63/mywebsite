import React from "react";

const Manzoni = ({ image, year, title, name }) => {
  return (
    <div className="max-mobile:px-2">
      {/* Header */}
      <div
        className="
      flex w-full flex-row items-center justify-center
      "
      >
        <div
          className="
        flex w-full flex-col items-center justify-center
        py-4
        text-black
        leading-[1.6]
        border-t border-gray-600
        "
        >
          <span className="text-2xl max-sm:text-xl">{name}</span>
          <span className="text-xl max-sm:text-sm">
            "{title}" {year}
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="
      relative w-full h-auto
      leading-none
      "
      >
        {/* Main Image */}
        <img
          src={image}
          alt="noud van dun"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div
        className="
      w-full h-auto
      px-16 pt-8 pb-14
      text-[#797979]
      text-xl
      bg-[#a58957]
      text-white
      max-sm:text-lg
      max-sm:px-6
    "
      >
        Merda d’artista is an edition of 90 signed and numbered works that
        Manzoni said he made from his own excrement. Each is a 30-gram can of
        shit, measuring 4.8 x 6.5 cm, “freshly preserved, produced and tinned”,
        as stated on the label. This information appears in Italian, French,
        German and English, against a background pattern produced by repeating
        the artist’s name in block letters. Because Manzoni sold each can by
        weight at gold’s daily market price, the shit literally became worth its
        weight in gold. <br />
        <br />
        Merda d’artista by Piero Manzoni is a satirical conceptual artwork that
        mocks the commercialization of art, questions the blind worship of an
        artist's signature, and acts as a personal joke against his father.
        <br />
        <br />
        <span className="font-semibold border-b boreder-white">
          Critique of Consumerism:
        </span>
        <br />
        Manzoni targeted the art market, where anything an artist touches or
        signs is blindly bought and given inflated monetary value.
        <br />
        <span className="font-semibold border-b boreder-white">
          The Power of the Signature:
        </span>
        <br /> By placing his name on a literal can of waste, he showed that
        buyers valued his identity and status far more than the physical object
        itself.
        <br />
        <span className="font-semibold border-b boreder-white">
          A Family Provocation:
        </span>
        <br /> The work was partly a cheeky response to his father—who owned a
        canning factory—telling him that his artistic output was "shit".
        <br />
        <span className="font-semibold border-b boreder-white">
          The Ultimate Joke:
        </span>{" "}
        <br />
        Selling human waste at the exact price of gold highlights the absurd and
        funny ways society measures worth.
      </div>
    </div>
  );
};

export default Manzoni;
