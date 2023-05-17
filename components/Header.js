import React, { useEffect, useState } from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import Router from 'next/router'
import { Link as LinkS } from 'react-scroll';

function Header() {
  const [, setScrollNav] = useState(false);
  const [navColor, setnavColor] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor(true) : setnavColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <nav className={`fixed h-28 w-full duration-1000 overflow-hidden hidden md:flex justify-center z-50 mx-auto ${navColor && 'background-blur-2' }`}>
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
                    <LinkS to='about'>ABOUT</LinkS>
                  </li>
                  <li className='mx-10 cursor-pointer'>
                    <LinkS to='projects'>WORKS</LinkS>
                  </li>
                  <li className='mx-10 cursor-pointer'>
                    <LinkS to='/#contacto'>CONTACT</LinkS>
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
