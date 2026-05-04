import React from 'react'

const Overview = ({image}) => {
  return (
    <div className="flex justify-center w-full h-auto mb-12 max-xsm:px-2">
      <img
        src={image}
        alt="overview"
        className=""
      />
    </div>
  )
}

export default Overview