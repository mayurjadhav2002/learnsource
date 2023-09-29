import React from 'react'
import Hero from './Landing/Hero'
import Deals from './Landing/Deals'
import Abc from './Landing/Abc'
function page() {
  return (
    <div>
      
      <Hero />
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center flex justify-center items-center gap-6 px-5">
        <blockquote className="text-2xl font-semibold italic mb-4">
          "Empowering you with knowledge and resources, one byte at a time."
        </blockquote>
        <p className="text-white text-end">- The Qbytespace Team</p>          
        </div>
      </header>
      <Deals/>

<Abc />
    </div>
  )
}

export default page
