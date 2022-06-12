import Image from 'next/image';
import React from 'react';
import Logo from '../public/logo.png';

function Header() {
  return (
    <nav className="h-28 w-full  overflow-hidden flex justify-center">
      <div className="mt-2 max-w-7xl w-full flex ">
        <div className='flex ml-auto'>
          <Image src={Logo} width={'120px'} />
        </div>
        <div>
          <ul className="flex ml-32 mt-8">
            <li className="mx-10 cursor-pointer"><a>About</a></li>
            <li className="mx-10 cursor-pointer"><a>Projects</a></li>
            <li className="mx-10 cursor-pointer"><a>Contacto</a></li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Header;
