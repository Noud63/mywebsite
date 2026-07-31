import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[300px] mt-12 text-blue-950 max-mobile:px-2 max-sm:mt-8 max-xsm:mt-4">
      <div className="w-full flex max-w-[900px] flex-col ">
        <div className="border-b border-blue-950 pb-4 text-center text-3xl max-sm:text-2xl">
          <span>What it's all about.</span>
        </div>

        <div className="w-full flex flex-col text-xl pt-4 gap-y-4  max-sm:text-lg max-mobile:px-2">
          <p>
            This is not a conventional summary of works produced over a period
            of time by an artist, but rather a selection of my work, accompanied
            by artistic and philosophical quotations that reflect on art,
            artists, the state of mind of the artist and the process of making
            art, alongside artworks from the history of modern art that test the
            very limits of art itself and establish the outer boundaries of the
            context within which modern art can be understood. The centerpiece
            of these experiments is Marcel Duchamp’s Fountain from 1917, that
            was voted the most influential artwork of the 20th century.
          </p>
          <p>
            In addition, I have included several works with similar intentions
            by renowned artists such as Maurizio Cattelan, Damien Hirst, Banksy,
            Bas Jan Ader and others. One could say it resembles{" "}
            <span className="italic">The Emperor’s New Clothes</span>, since
            Duchamp’s intellectual statement already encompassed it all. The
            boundaries had already been drawn — nothing fundamentally new — yet,
            a century later, such works are still capable of shaking the art
            world to its core. The extreme nature of these artworks may obscure
            their relationship to art history, leading viewers to mistakenly
            perceive them as something new.
          </p>
          <p>
            As I mentioned in the introduction, I made a selection from my work
            produced between roughly 1990 and 2018. The works reveal a
            cluster-shaped development, with each period distinguished from the
            others by different materials, styles, and techniques. The
            motivation or inspiration, however, is often the same, and all the
            works are connected by a common thread rooted in a shared set of
            ideas and themes.
            <br />
            Each cluster is labeled A, B, or C, as indicated in the title bar of
            each painting.
            <br />
            Cluster A covers the period from 2012 to 2018, Cluster B from 2007
            to 2011, and Cluster C from 1994 to 2006.
          </p>

          <p>
            Finally, a highly compressed résumé of my educational background.
            <br />
            I studied art at the Hogeschool voor de Kunsten in Maastricht from
            1984 to 1989.
            <br />
            After that I studied at the Jan van Eyck Academie, also in
            Maastricht, for only one year fom 1989 to 1990.
            <br />
            Subsequently I was admitted at the "Ateliers 63" wich was located in
            Haarlem at the time and is now located in Amsterdam under the name
            "De Ateliers".
            <br />
            The latter two are so-called second-phase postgraduate art
            programmes that focus on the further artistic development of artists
            and their preparation for an independent professional practice.
            <br />
            After two years at De Ateliers, from 1990 to 1992, I began my
            professional career as an independent artist in Haarlem.
            <br />
            After five years in Haarlem I relocated to Amsterdam in 1997.
            <br />
            In 1992 I was awarded the "Van Bommel Van Dam Art Prize" and in 1995
            I recieved the "Koninklijke Subsidie voor vrije Schilderkunst" art
            prize.
            <br />
            In 1991, 1995, 1997, 1999, 2001, and 2008, I received grants from
            the Mondriaan Fonds in recognition of my artistic practice.
          </p>

          <p>
            In 2019, I started learning how to code and build web applications.
            <br /> I find the combination of art and technology fascinating and
            was eager to expand my skill set by exploring fields of knowledge
            beyond the artistic realm.
            <br />
            If you are interested, you can view my tech portfolio here:{" "}
            <a
              href="https://appcollection.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
            >
              https://appcollection.netlify.app
            </a>
            <br />
            Here is an example of an art-related web application I built:{" "}
            <a
              href="https://artinamsterdam-nextjs.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
            >
              https://artinamsterdam-nextjs.vercel.app/
            </a>
          </p>

          <p className="text-sm text-center mt-8">
            (Note: for convenience, I use “modern art” as an umbrella term that
            includes contemporary art as well.)
          </p>
        </div>
      </div>
      <div className="mt-20">
        <Link
          to="/"
          className="cursor-pointer border border-blue-950 px-10 py-2 rounded-full bg-gradient-to-r from-black via-slate-500 to-black text-white text-xl tracking-wide max-sm:py-1 max-sm:px-8"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default About;
