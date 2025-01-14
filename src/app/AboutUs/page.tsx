import React from 'react'
import Image from 'next/image'


const AboutUs = () => {
  return (
    <div>
        <h1 className='text-blue-900 text-center mt-2 font-extrabold font-serif text-4xl underline'>ABOUT US</h1>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <Image 
        src="/images/illustration.webp" 
        alt="html"
        width={500}
        height={500} 
        className='rounded-full w-40 h-32' />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
         Fashion Illustration
        </h2>
        <p className="leading-relaxed text-base">
        Fashion illustration is the art of communicating fashion ideas in a visual
        form through the use of drawing tools or design-based software programs.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-cyan-700">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Draping
        </h2>
        <p className="leading-relaxed text-base">
        Draping is a fashion design technique that involves pinning and placing fabric
        on a dress form or model to create a three-dimensional garment structure.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-cyan-700">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <Image 
        src="/images/draping.jpeg" 
        alt="html"
        width={500}
        height={500} 
        className='rounded-full w-40 h-32' />
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <Image 
        src="/images/pattern.jpeg" 
        alt="html"
        width={500}
        height={500} 
        className='rounded-full w-40 h-32' />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Pattern Making
        </h2>
        <p className="leading-relaxed text-base">
        Pattern is the process of creating a template for a garment that can be used to
        cut fabric and sew the garment together. 
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-cyan-700">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  
  </div>
</section>

    </div>
  )
}

export default AboutUs