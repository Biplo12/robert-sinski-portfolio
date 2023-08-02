'use client';

import React from 'react';

import useScrollDirection from '@/hooks/useScrollDirection';

import NavbarList from '@/components/Layout/Partials/NavbarList';
import NavbarLogo from '@/components/Layout/Partials/NavbarLogo';
import ResumeButton from '@/components/Layout/Partials/ResumeButton';
const Navbar: React.FC = (): JSX.Element => {
  const scrollDirection = useScrollDirection();
  return (
    <nav
      className={`fixed z-20 w-full ${
        scrollDirection === 'down' ? '-top-36' : 'top-0'
      } flex h-20 items-center justify-between px-12 text-white transition duration-200 ease-linear`}
      role='navigation'
    >
      <NavbarLogo />
      <div className='flex items-center'>
        <NavbarList />
        <ResumeButton />
      </div>
    </nav>
  );
};
export default Navbar;
