import { motion } from 'framer-motion';
import React from 'react';

import useHeroVariants from '@/hooks/useHeroVariants';

const HeroHeader: React.FC = (): JSX.Element => {
  const { containerVariants, childVariants } = useHeroVariants();
  return (
    <motion.div
      className='flex flex-col items-start'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.h4
        className='text-spindrift font-mono text-lg'
        variants={childVariants}
      >
        Hi, my name is
      </motion.h4>
      <motion.h1
        className='mxmd:text-[2.875rem] font-mono text-[5rem] font-bold'
        variants={childVariants}
      >
        <motion.span className='text-white' variants={childVariants}>
          Robert
        </motion.span>{' '}
        <motion.span className='text-gradient' variants={childVariants}>
          Siński.
        </motion.span>
      </motion.h1>
      <motion.h2
        className='mxmd:text-[1.575rem] font-mono text-[2.5rem] font-bold'
        variants={childVariants}
      >
        Full stack engineer, based in Poland.
      </motion.h2>
    </motion.div>
  );
};

export default HeroHeader;
