import React from 'react'
import { urlFor } from '../sanity'

const About = ({aboutData}) => {

  const { title, sub_title, description, image } = aboutData || ''

  return (
    <div
      id='about'
      className='overflow-hidden mx-auto flex flex-col space-x-[47px] justify-between items-center p-10 text-white  sm:justify-center bg-miguel-gray'
    >
      <section className='flex flex-col justify-center h-full sm:flex-row sm:h-fit'>
        <div className='rounded-xl broder min-w-[300px] flex overflow-hidden object-center items-center justify-center mb-10 sm:mb-0 sm:mr-5'>
          {image && 
            <img
              src={`${urlFor(image)}`}
              className='blob'
            />
          }
        </div>
        <div className='w-full flex font-semibold flex-col space-y-5 max-w-[400px] sm:max-w-[500px] sm:justify-center sm:pl-5'>
          <div className='text-base text-principal tracking-widest mt-1'>{title}</div>
          <div className=' text-3xl'>{sub_title}</div>
          <div className=' text-[18px] font-normal text-description'>
            {description}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
