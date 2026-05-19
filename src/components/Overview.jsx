import React from 'react'

const Overview = ({image}) => {
  return (
    <div className="flex justify-center w-full h-auto my-4 max-xsm:px-2 relative">
      <img
        src={image}
        alt="overview"
        className=""
      />
         <div className="absolute flex items-center justify-center bottom-4 right-4 text-white text-md  px-4 border border-white rounded-full max-md:text-[12px] max-sm:bottom-1 max-sm:right-1">Overview</div>
    </div>
  )
}

export default Overview