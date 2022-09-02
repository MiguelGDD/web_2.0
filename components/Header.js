import Image from 'next/image'
import React from 'react'
import Logo from '../public/LogoStyle2.svg'
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si'
import Link from 'next/link'

function Header() {
  const socialMedia = [
    {
      name: 'Instagram',
      icon: SiInstagram,
      link: 'https://www.instagram.com/miguel__guell/',
    },
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
  return (
    <>
      <nav className='h-28 w-full overflow-hidden flex justify-center '>
        <div className='mt-2 max-w-7xl w-full flex justify-between items-center'>
          <div className='flex'>
            <Image src={Logo} width={'120px'} height={'120px'} />
          </div>
          <div className='flex items-center space-x-[100px]'>
            <div className='flex'>
              <div>
                <ul className='flex ml-32 justify-end font-bold'>
                  <li className='mx-10 cursor-pointer'>
                    <a>About</a>
                  </li>
                  <li className='mx-10 cursor-pointer'>
                    <a>Projects</a>
                  </li>
                  <li className='mx-10 cursor-pointer'>
                    <a>Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex space-x-5'>
              {socialMedia?.map((item) => (
                <button
                  key={item.name}
                  className='border-2 flex p-2 items-center rounded-full'
                >
                  <Link href={`${item.link}`} passHref>
                    <a target='_blank' rel='noreferrer' className='flex w-full'>
                      <item.icon />
                    </a>
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
