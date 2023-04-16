import React from 'react'
import { urlFor } from '../sanity'

const About = ({aboutData}) => {

  const { title, sub_title, description, image } = aboutData || ''

  return (
    <div
      id='about'
      className='overflow-hidden mx-auto flex flex-col space-x-[47px] justify-between items-center p-10 text-white h-[100vh] sm:justify-center'
    >
      <div className='flex flex-col justify-center h-full sm:flex-row sm:h-fit'>
        <div className=' rounded-xl broder flex overflow-hidden object-center items-center justify-center'>
          {image && 
          <img
            src={`${urlFor(image)}`}
            className='w-[400px] overflow-hidden justify-center'
          />}
        </div>
        <div className='w-full flex font-semibold flex-col space-y-5 max-w-[400px] sm:max-w-[500px] sm:justify-center sm:pl-5'>
          <div className='text-base text-principal tracking-widest mt-1'>{title}</div>
          <div className=' text-3xl'>{sub_title}</div>
          <div className=' text-[18px] font-normal text-description'>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
