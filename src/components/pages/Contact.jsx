import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[300px] mt-12 text-blue-950 max-sm:px-2 text-center max-sm:mt-8 max-xsm:mt-4">
      <div className="w-full flex max-w-[900px] flex-col ">
        <div className="border-b border-blue-950 pb-4 text-center text-3xl max-sm:text-2xl">
          <span>Contact</span>
        </div>

        <div className="w-full flex flex-col text-xl pt-4 gap-y-4  max-sm:text-lg">
          <p>
            E-mail: noudvandun@gmail.com
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
  )
}

export default Contact