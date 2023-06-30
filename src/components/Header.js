import React from 'react';

//import components
import Socials from './Socials';
import logo from '../img/header/logo.svg'
import MobileNav from './MobileNav';

//import link
import {Link} from 'react-router-dom'

const Header = () => {
  return <header className='bg-[#070616] fixed w-full px-[50px] lg:px-[100px] z-30 h-[80px] lg:h-[100px] flex items-center'>
    {/* Nav logo and links */}
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*Logo*/}
      <Link to={'/'} className='max-w-[200px]'>
      <img src={logo} alt =''/>
      </Link>
      {/*nav links - initially hidden -show on desktop mode */}
      <nav className='hidden lg:flex gap-x-12  text-[1.25rem]'>
        <Link to={'/'} className='text-[#eee] hover:text-pink-600 transition'>Home
        </Link>
        <Link to={'/about'} className='text-[#eee] hover:text-pink-600 transition'>About
        </Link>
        <Link to={'/projects'} className='text-[#eee] hover:text-pink-600 transition'>Projects
        </Link>
        <Link to={'/contact'} className='text-[#eee] hover:text-pink-600 transition'>Contact
        </Link>
        
      </nav>

      
    </div>
    {/* mobile nav*/}
    <MobileNav/>
  </header>;
};

export default Header;
