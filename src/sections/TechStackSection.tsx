import React from 'react'

import TechStackBanner from '@/components/TechStackBanner'
import Image from 'next/image'
import techStackImage from '@/assets/tech-stack.webp'
import TechStackText from '@/components/TechStackText'

const TechStackSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <TechStackText />
          <div className="mt-8 lg:hidden">
            <TechStackBanner />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={techStackImage.src}
              alt="Tech Stack Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-8 hidden lg:block">
            <TechStackBanner />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackSection