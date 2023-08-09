import { motion } from 'framer-motion';
import React, { useRef } from 'react';

import { useDimensions } from '@/hooks/useDimensions';
import useNavbarVariants from '@/hooks/useNavbarVariants';

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
  const { listVariants, itemVariants } = useNavbarVariants();

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className='bg-liberty-blue relative z-50 h-screen w-[275px]'
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <div className='absolute right-8 top-4'>
        <HamburgerMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <motion.ul
        className='mr-3 flex h-full flex-col items-center justify-center gap-6 font-mono'
        variants={listVariants}
      >
        {navItems.map((item, index) => (
          <motion.li key={index} className='px-4' variants={itemVariants}>
            <a
              href={item.href}
              className='hover:text-spindrift flex flex-col items-center justify-center font-mono text-lg text-white transition duration-200 ease-linear'
            >
              <span className='text-spindrift'>0{index + 1}. </span>
              <span>{item.name}</span>
            </a>
          </motion.li>
        ))}
        <motion.li variants={itemVariants}>
          <ResumeButton isMenuOpen={isMenuOpen} />
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
export default NavbarResponsiveMenu;
