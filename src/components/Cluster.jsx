import React from 'react'

const Cluster = ({title}) => {
  return (
    <div className="w-full flex justify-center gap-4 px-4 text-xl text-white bg-gradient-to-r from-black via-slate-700 to-black py-4 mb-4">
        <span>{title[0]}</span>
        <span>{title[1]}</span>
        </div>
  )
}

export default Cluster