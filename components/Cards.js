import Link from 'next/link'
import React, { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useClickOutside'
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { itemVariants } from '../data/styleVariants/liVariant'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { urlFor } from '../sanity';

const Cards = ({ title, images, description, link}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, ()=> setOpen(false))
  return (
    <motion.nav
        key={title} 
        className='w-80'
        initial={false}
        animate={open ? "open" : "closed"}
        ref={ref}
        >
        <a
        className='cursor-pointer w-full h-full relative'
        onClick={()=> setOpen(!open)} >
            <Carousel 
                autoPlay
                infiniteLoop
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={5000}
                className={'rounded-lg h-fit w-fit overflow-hidden'}
                >
                {images?.map(({image}, index)=>(
                <div key={`image-${index}`} className='flex flex-col'>
                    {image && 
                    <img 
                      alt={`image page`} 
                      src={`${urlFor(image)}`}
                      width={200}
                      className='w-full h-52 rounded-lg object-cover'
                    /> }
                </div>
                ))
                }
          </Carousel>
        </a>

        {/* card Info */}
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 1
              }
            }
          }}
          style={{ pointerEvents: open ? "auto" : "none" }} 
            className={`${!open ? 'h-0' : 'h-fit mt-2'} bg-back xl:w-80 xl:absolute z-20 flex flex-col mx-auto rounded-b-lg text-white p-5 ${open && ' mb-[50px] '}`}>
              <motion.li variants={itemVariants} className='font-semibold text-2xl mb-3'>{title}</motion.li>
              <motion.li variants={itemVariants} className='text-sm font-normal mb-7'>{description}</motion.li>
              <motion.li variants={itemVariants}
                >
                  {link ? 
                  <Link 
                    href={link}
                    passHref
                  >
                    <a 
                      target="_blank"
                      rel="noreferrer"
                      className='mx-auto px-4 py-2 bg-principal rounded-md cursor-pointer text-white font-semibold'
                      >Go to web</a>
                  </Link>
                  :  
                  <button
                      disabled={!link}
                      className='mx-auto px-4 py-2 bg-principal opacity-25 rounded-md text-white font-semibold cursor-not-allowed'
                      >Website not available</button>
                }
              </motion.li>
          </motion.ul>
        {/* desktop */}
    </motion.nav>
  )
}

export default Cards