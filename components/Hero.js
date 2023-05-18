import Link from 'next/link'
import React from 'react'
import { socialMedia } from './Header'
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = ({title, subTitle, image, y1}) => {

  return (
    <motion.div
      style={{ y: y1, x: 0 }}
      className='relative w-full'>
      <div className='absolute z-30 flex justify-center w-full'>
        <div className='text-white text-[64px] mt-[40vh] font-semibold text-center'>
          <Typewriter
            onInit={(typewriter)=> {
              typewriter
              .typeString("Hi")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I’m Miguel Guell")
              .start();
              }}
          />
          <div className='text-[24px] mt-6'>{subTitle}</div>
          <div className='flex space-x-5 w-full items-center justify-center my-6 z-[1000]'>
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
        <img
          src={'/heroBackground.jpg'}
          alt='hero'
          className='blur-md hero object-cover'
        />
    </motion.div>
  )
}

export default Hero
