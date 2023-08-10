import { motion } from 'framer-motion';
import React from 'react';
const NavbarLogo: React.FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-spindrift font-mono text-3xl font-bold'>
        <a href='/'>
          R<span className='text-xl'>.</span>
        </a>
      </h1>
    </motion.div>
  );
};
export default NavbarLogo;
