import React from 'react'

const Cattelan = ({image, year, title, name}) => {
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
         pt-8
        text-black
        leading-[1.6]
        border-t border-gray-600
        max-sm:pt-4
      "
    >
      

      <span className="text-2xl max-sm:text-xl">
       {name}
      </span>
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
      border-b border-[#bebcb5]
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
      bg-black
      text-white
      max-sm:text-lg
      max-sm:px-6
    "
  >
    Cattelan's banana sold at Art Basel for  $120.000,- , (and subsequently eaten by another artist).<br />
    So, what happened?
    <br />

    Cattelan has turned the act, the truly absurd event, of rich people buying
    bananas and the ensuing media spectacle into a kind of performance art.
    <br />

    ‘Comedian,’ with its simple composition, offered a complex reflection of
    ourselves on how we assign worth and what kind of objects we value. It’s
    the grotesqueness of the sale and ensuing spectacle, and more specifically,
    it’s the idea that the system is absurd.
    <br />

    So don’t ask if the duct-taped banana is art. Ask if it’s any good.
    It’s not the banana that constitutes the art.
    <br />
    <br />

    One could say it is like the emperor's new clothes. Some 114 years ago
    Marcel Duchamp already submitted his, now world famous 'Fountain', for an
    exhibition of the Society of Independent Artists. Fountain was not rejected
    but the work was never placed in the show area.
    <br />

    Just like Duchamp's urinal Cattelan's banana was eventually removed from
    gallery Perrotin's booth at the art fair, although for a completely
    different reason. The work of art had caused ‘several uncontrollable crowd
    movements'.
  </div>
</div>
  )
}

export default Cattelan