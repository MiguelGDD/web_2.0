import Image from 'next/image'
import React from 'react'
import fotoMiguel from '../public/miguel-foto.jpg'

const About = () => {
  return (
    <div className='w-8/12 m-auto flex flex-row mt-36 justify-between items-center '>
      <div className='w-1/3 text-center flex flex-col h-full my-auto'>
        <div>
          <div>title</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>

        <div>
          <div>title</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>

        <div>
          <div>title</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
      </div>

      <div className='w-1/5'>
        <div className='flex flex-col h-auto overflow-hidden w-full rounded-full '>
          <Image src={fotoMiguel} />
        </div>
        <div className='items-center justify-center text-center mt-5'>
          <p>Miguel Guell</p>
          <p>Frontend Developer</p>
        </div>
      </div>

      <div className='w-1/3 text-center flex flex-col h-full my-auto '>
        <div>
          <div>title</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>

        <div>
          <div>title</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>

        <div>
          <div>title</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      
    </div>
  )
}

export default About