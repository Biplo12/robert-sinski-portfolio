'use client';

import React from 'react';

import useIsTop from '@/hooks/useIsTop';
import useScrollDirection from '@/hooks/useScrollDirection';

import NavbarList from '@/components/Layout/Partials/NavbarList';
import NavbarLogo from '@/components/Layout/Partials/NavbarLogo';
import ResumeButton from '@/components/Layout/Partials/ResumeButton';
const Navbar: React.FC = (): JSX.Element => {
  const scrollDirection = useScrollDirection();
  const isTop = useIsTop();
  return (
    <header
      className={`fixed z-50 flex h-20 w-full items-center justify-between px-8 text-white duration-150 ease-linear ${
        scrollDirection === 'down' ? '-top-36' : 'top-0'
      } ${isTop ? '' : 'bg-liberty-blue bg-opacity-90 shadow-lg'}`}
      role='navigation'
    >
      <NavbarLogo />
      <div className='flex items-center'>
        <NavbarList />
        <ResumeButton />
      </div>
    </header>
  );
};
export default Navbar;
