import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div className="h-screen flex flex-col items-center mt-20">
        <div className="text-4xl">
          What's this al about?
        </div>
        <div className="mt-40">
           <Link to="/" className="cursor-pointer border border-black text-black px-8 py-1 rounded-full">Back</Link>
        </div>
        </div>

  )
}

export default About