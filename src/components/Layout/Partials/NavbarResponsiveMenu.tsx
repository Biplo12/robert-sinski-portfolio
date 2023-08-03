import React from 'react';

import HamburgerMenuIcon from '@/components/Layout/Partials/HamburgerMenuIcon';
import ResumeButton from '@/components/Layout/Partials/ResumeButton';

interface INavbarResponsiveMenuProps {
  navItems: { name: string; href: string }[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavbarResponsiveMenu: React.FC<INavbarResponsiveMenuProps> = ({
  navItems,
  isMenuOpen,
  toggleMenu,
}): JSX.Element => {
  return (
    <div className='bg-liberty-blue relative z-50 h-screen w-[275px]'>
      <div className='absolute right-8 top-4'>
        <HamburgerMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <ul className='mr-3 flex h-full flex-col items-center justify-center gap-6'>
        {navItems.map((item, index) => (
          <li key={index} className='px-4'>
            <a
              href={item.href}
              className='hover:text-spindrift flex flex-col items-center justify-center text-lg text-white transition duration-200 ease-linear'
            >
              <span className='text-spindrift'>0{index + 1}. </span>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        <ResumeButton isMenuOpen={isMenuOpen} />
      </ul>
    </div>
  );
};
export default NavbarResponsiveMenu;
