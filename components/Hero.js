import Link from 'next/link'
import React from 'react'
import { socialMedia } from './Header'
import { urlFor } from '../sanity'

const Hero = ({title, subTitle, image}) => {
  return (
    <div className='relative w-full'>
      <div className='absolute z-30 flex justify-center w-full'>
        <div className='text-white text-[64px] mt-[40vh] font-semibold text-center'>
          <div>{title}</div>
          <div className='text-[24px] mt-6'>{subTitle}</div>
          <div className='flex space-x-5 w-full items-center justify-center my-6'>
            {socialMedia?.map((item) => (
              <button
                key={item.name}
                className='border-2 bg-white flex p-2 items-center rounded-full '
              >
                <Link href={`${item.link}`} passHref>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='flex w-full text-black text-lg'
                  >
                    <item.icon />
                  </a>
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      {image ? <img src={`${urlFor(image)}`} alt='hero' className='blur-md hero object-cover' /> : <div className='hero' />}
    </div>
  )
}

export default Hero
