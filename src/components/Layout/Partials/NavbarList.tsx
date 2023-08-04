import React from 'react';

import useToggle from '@/hooks/useToggle';

import HamburgerMenuIcon from '@/components/Layout/Partials/HamburgerMenuIcon';
import NavbarResponsiveMenu from '@/components/Layout/Partials/NavbarResponsiveMenu';
const NavbarList: React.FC = (): JSX.Element => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#expirience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className='mxmd:hidden relative font-mono'>
        <ul className='mr-3 flex justify-end gap-3'>
          {navItems.map((item, index) => (
            <li key={index} className='px-4'>
              <a
                href={item.href}
                className='hover:text-spindrift text-sm text-white transition duration-200 ease-linear'
              >
                <span className='text-spindrift'>0{index + 1}. </span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div
        className={`mxmd:flex fixed duration-200 ease-linear ${
          isMenuOpen ? 'right-0 top-0 flex' : '-right-[18rem] top-0 hidden'
        }`}
      >
        <NavbarResponsiveMenu
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </>
  );
};
export default NavbarList;
