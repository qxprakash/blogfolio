import React from 'react'

import TechStackBanner from '@/components/TechStackBanner'
import Image from 'next/image'
import techStackImage from '@/assets/tech-stack.webp'
import TechStackText from '@/components/TechStackText'

const TechStackSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 pb-8 md:pb-16">
      <div className="lg:flex lg:items-start lg:space-x-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <TechStackText />
          <div className="mt-8">
            <TechStackBanner />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-50 animate-pulse"></div>
            <div className="relative animate-float">
              <Image
                src={techStackImage.src}
                alt="Tech Stack Illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover transition-all duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-bold">Explore My Tech Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackSection