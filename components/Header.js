import React from 'react'
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si'
import Router from 'next/router'

function Header() {
  return (
    <>
      <nav className='fixed h-28 w-full overflow-hidden hidden md:flex justify-center z-50 mx-auto background-blur-2'>
        <div className='mt-2 max-w-7xl w-full flex justify-between items-center mx-auto px-10'>
          <button className='flex' onClick={() => Router.push('/')}>
            <div className='container'>
              <span>M</span>
              <span>I</span>
              <span>G</span>
              <span>U</span>
              <span>E</span>
              <span>L</span>
            </div>
          </button>
          <div className='flex items-center space-x-[100px]'>
            <div className='flex'>
              <div>
                <ul className='flex ml-32 justify-end font-bold text-white text-lg'>
                  <li className='mx-10 cursor-pointer'>
                    <a href='/#about'>ABOUT</a>
                  </li>
                  <li className='mx-10 cursor-pointer'>
                    <a href='/#projects'>WORKS</a>
                  </li>
                  <li className='mx-10 cursor-pointer'>
                    <a href='/#contacto'>CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

export const socialMedia = [
  {
    name: 'Github',
    icon: SiGithub,
    link: 'https://github.com/MiguelGDD',
  },
  {
    name: 'Linkedin',
    icon: SiLinkedin,
    link: 'https://www.linkedin.com/in/guelldiazm/',
  },
]
