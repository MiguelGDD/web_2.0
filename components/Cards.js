import Link from 'next/link'
import React, { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useClickOutside'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Cards = ({ title, images, description, tools, link}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, ()=> setOpen(false))
  return (
    <div 
        key={title} 
        className='w-80'
        ref={ref}
        >
        <a
        className='cursor-pointer'
        onClick={()=> setOpen(!open)} >
            <Carousel 
                autoPlay
                infiniteLoop
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={3000}
                className={'border rounded-lg overflow-hidden'}
                >
                {images?.map(({img}, index)=>(
                <div key={`image-${index}`} className='flex flex-col'>
                    <img 
                    alt={`image page`} 
                    src={img}
                    className='w-full h-52 object-cover'
                    /> 
                </div>
                ))
                }
      </Carousel>
        </a>
        {/* mobile */}
        <div 
          
          className={`${!open && 'hidden'} bg-white w-[90%] flex flex-col mx-auto rounded-b-lg text-black p-2`}>
            <h1 className='font-bold text-2xl mb-1'>{title}</h1>
            <p className='text-base font-medium mb-3'>{description}</p>
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
        </div>
        {/* desktop */}
    </div>
  )
}

export default Cards