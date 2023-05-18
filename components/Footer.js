import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { socialMedia } from './Header'

const Footer = () => {
  return (
    <div
      id='contacto'
      className='w-full overflow-hidden mx-auto flex flex-col justify-between items-center p-7 text-center bg-black'
    >
      <div className='space-x-5 flex'>
        <button className='flex' onClick={() => Router.push('/')}>
          <div className='container'>
            <span>M</span>
            <span>i</span>
            <span>g</span>
            <span>u</span>
            <span>e</span>
            <span>l</span>
          </div>
        </button>
        <div className='flex h-full items-center my-auto space-x-2 justify-center'>
          {socialMedia?.map((item) => (
            <button
              key={item.name}
              className=' '
            >
              <Link href={`${item.link}`} passHref>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='flex text-white border-2 w-9 h-9 p-2 items-center rounded-full justify-center my-auto'
                >
                  <item.icon />
                </a>
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className='text-white mt-5'>
        Created by Miguel Guell | © 2021 All rights reserved.
      </div>
    </div>
  )
}

export default Footer
