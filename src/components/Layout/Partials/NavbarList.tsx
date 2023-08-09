import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react'; // Import useEffect and useState

import useIsMobile from '@/hooks/useIsMobile';

import HamburgerMenuIcon from '@/components/Layout/Partials/HamburgerMenuIcon';
import NavbarResponsiveMenu from '@/components/Layout/Partials/NavbarResponsiveMenu';

const NavbarList: React.FC = (): JSX.Element => {
  const [isMenuOpen, toggleMenu] = useCycle(false, true);
  useIsMobile(toggleMenu);
  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#expirience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className='mxmd:hidden font-mono'>
        <ul className='mr-3 flex justify-end gap-8'>
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className='hover:text-spindrift text-sm text-white transition duration-200 ease-linear'
                >
                  <span className='text-spindrift'>0{index + 1}. </span>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
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
