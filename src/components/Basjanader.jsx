import React from "react";

const Basjanader = ({ image, name, year, title }) => {
  return (
    <div className="max-mobile:px-2">
      <div className="flex flex-col text-center bg-black py-6 text-white">
        <span className="text-2xl max-sm:text-xl">{name}</span>
        <span className="text-lg max-sm:text-sm">
          "{title}" {year}
        </span>
      </div>
      <div className="w-full bg-black">
        <img src={image} alt="duchamp" loading="lazy" />
      </div>
      <div className="flex flex-col bg-black text-xl text-white px-16 pt-12 pb-14 max-sm:text-lg max-sm:px-4 gap-y-4">
        <p>
          In 1975 Bas Jan Ader disappeared at sea while trying to sail from the
          East Coast of the United States to Europe as part of a project titled
          In Search of the Miraculous. <br />
          Ader's considerable influence on later conceptual artists stems from
          the way in which he used the cool analytic and antisubjective
          aesthetics of conceptual art to explore experiences that would seem
          definitively subjective--the emotional intensity of tragedy and the
          romantic quest for the sublime. <br />
          In Search of the Miraculous was conceived as a three-part project: a
          lonely nighttime walk from the hills of Los Angeles down to the sea,
          documented in photographs; the Atlantic crossing; a night walk through
          Amsterdam, mirroring the LA photographs.
          <br />
          The circumstances of his disappearance have led many interpreters to
          identify Ader (as a person) with the role of the tragic romantic hero.
          The cult status of the artist as a hero whose work is authenticated
          through his death, however, has obscured the fact that Ader's art was
          a critical investigation of precisely those romantic motives his
          persona has now come to be identified with.
        </p>
      </div>
    </div>
  );
};
export default Basjanader;
