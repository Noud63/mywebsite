import { useState } from "react";
import { ChevronsDown } from "lucide-react";

export default function AboutMtg() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-slate-950 pb-2">
      {/* Header */}
      <div className="mt-4 flex w-full flex-col items-center justify-center text-2xl font-light text-white mt-8">
        About "Mind the Gap"
      </div>

      {/* Toggle Icon */}
      <div className="pt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center"
        >
          <ChevronsDown
            className={`
              text-white
              transition-transform duration-1000 ease-linear cursor-pointer
              w-6 h-6 sm:w-8 sm:h-8
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
          />
        </button>
      </div>

      {/* Expandable Content */}
      <div
        className={`
          w-full overflow-hidden text-center
          transition-all duration-1000 ease-in-out
          ${isOpen ? "max-h-[500rem]" : "max-h-4"}
        `}
      >
        <div className="flex w-full flex-col items-center justify-center bg-slate-950 pt-[3%] text-white">
          {/* Title */}
          <div className=" text-md tracking-wide text-2xl font-bold mb-4">
            Mind the Gap (2010)
          </div>

          {/* English Version */}
          {language === "en" && (
            <div
              className="
                flex w-[85%] flex-col items-center justify-center gap-4
                text-left text-lg
                font-light text-white
                animate-[fadeIn_1s_ease]
              "
            >
              <p>
                Mind the Gap is a composite image. A composite landscape made up
                of landscape elements that are isolated from their original
                context and reassembled as a painted 'cut and paste work' to
                form a new landscape. The individual parts are no longer
                experienced as a homogeneous part of the overall picture. The
                landscape has little in common with the representation of a
                landscape from the real world. It doesn't make sense. Too many
                missing parts, parts that don't belong.
              </p>

              <p>
                The underlying idea or motivation that led to this image mainly
                concerns the concept of reconstruction. Reconstruction is a
                control mechanism that we (consciously / unconsciously) are
                constantly working on in keeping the world around us
                understandable. To be able to interpret things, to solve
                problems or to understand yourself or someone else.
              </p>

              <p>
                However, a reconstruction always takes place afterwards. Depends
                on the available information from the past and the reliability
                of the source, not least how we subsequently process that
                information.
              </p>

              <p>
                The information is often brief or too fragmented to form a
                conclusive picture. The gaps in the provision of information
                (Mind the Gap) are filled in on the basis of assumptions, what
                is perceived as logical, the prejudice or the lie.
              </p>

              <div className="mt-6 w-full text-md font-light">Noud van Dun</div>

              {/* Switch to Dutch */}
              <button
                onClick={() => setLanguage("nl")}
                className="mt-12 flex w-full items-center justify-center cursor-pointer"
              >
                <img
                  src="images/dutchflag.png"
                  alt="Dutch flag"
                  className="mb-20 w-12"
                  
                />
              </button>
            </div>
          )}

          {/* Dutch Version */}
          {language === "nl" && (
            <div
              className="
                flex w-[85%] flex-col items-center justify-center gap-4
                text-left text-lg
                font-light text-white
                animate-[fadeIn_1s_ease]
              "
            >
              <p>
                Mind the Gap is een samengesteld beeld. Een composiet landschap
                opgebouwd uit landschapselementen die zijn geïsoleerd uit hun
                oorspronkelijke context en als een geschilderd ‘knip en plak
                werk’ weer zijn samengevoegd tot een nieuw landschap. De
                afzonderlijke delen worden niet meer als homogeen deel van het
                totale beeld ervaren. Het landschap kent nog maar weinig
                raakvlakken met de voorstelling van een landschap uit de reële
                wereld. Het klopt niet. Te veel ontbrekende delen.
              </p>

              <p>
                Het achterliggende idee of motivatie wat heeft geleid tot dit
                beeld gaat voornamelijk om het begrip reconstructie en het
                reconstrueren. Het reconstrueren is een controlemechanisme waar
                wij (bewust/onbewust) voortdurend mee bezig zijn in het
                begrijpelijk houden van de wereld om ons heen. Om zaken te
                kunnen duiden, problemen op te lossen of om jezelf of iemand
                anders te begrijpen.
              </p>

              <p>
                Een reconstructie vindt echter altijd achteraf plaats. Is
                afhankelijk van de beschikbare informatie uit het verleden de
                betrouwbaarheid van de bron en niet in de laatste plaats hoe wij
                vervolgens die informatie verwerken, en met welke intenties.
              </p>

              <p>
                Vaak is de informatie summier of te gefragmenteerd om een
                sluitend beeld te vormen. De hiaten of de leegtes in de
                informatievoorziening (Mind the Gap) worden ingevuld op basis
                van veronderstelling, wat men als logisch ervaart , het
                vooroordeel of de leugen.
              </p>

              <div className="mt-4 w-full text-md font-light">Noud van Dun</div>

              {/* Switch to English */}
              <button
                onClick={() => setLanguage("en")}
                className="mt-12 flex w-full items-center justify-center cursor-pointer"
              >
                <img
                  src="images/englishflag.png"
                  alt="English flag"
                  className="pb-16"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
