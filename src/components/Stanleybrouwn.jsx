import React from "react";

const Stanleybrouwn = ({ image, name, year, title }) => {
  return (
    <article className="max-mobile:px-2">
      <header className="flex flex-col text-center border-t border-black pt-6 pb-2 text-black">
        <span className="text-2xl max-sm:text-xl">{name}</span>
        <span className="text-lg max-sm:text-sm">
          "{title}" {year}
        </span>
      </header>
      <figure className="w-full">
        <img src={image} alt="stanleybrouwn" loading="lazy" />
      </figure>
      <section className="flex flex-col text-xl text-black px-16 pt-6 pb-14 max-sm:text-lg max-sm:px-4 gap-y-4 border-b border-black">
        <p>
          In his work This Way Brouwn, Stanley Brouwn engaged with this simple
          act: he asked random passers-by for directions and marked their
          spontaneous, chance drawings with his personal stamp. In doing so, the
          participants inadvertently became part of a work that explored the
          experience of time, movement, and space.
        </p>
        <p>
          Brouwn described the project as imbuing these routes with “the most
          primal aspect of our being: the ability to move.” Walking and the
          experience of motion became central to his practice, and through this
          pioneering participatory approach, he invited viewers to become
          co-creators, experiencing the work from the perspective of the artist
          who orchestrated it.
        </p>
      </section>
    </article>
  );
};

export default Stanleybrouwn;
