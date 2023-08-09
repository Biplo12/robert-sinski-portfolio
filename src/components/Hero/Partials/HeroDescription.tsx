import { motion } from 'framer-motion';
import React from 'react';

import { MAIL } from '@/lib/vars';
import useHeroVariants from '@/hooks/useHeroVariants';
const HeroDescription: React.FC = (): JSX.Element => {
  const { containerVariants, childVariants } = useHeroVariants();

  return (
    <motion.p
      className='text-grey-text mxmd:text-md exsm text-lg:text-sm font-calibre mt-4'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.span variants={childVariants}>
        Passionate about learning and problem-solving.
      </motion.span>
      <br />
      <motion.span variants={childVariants}>
        Actively seeking new opportunities to contribute expertise and deliver
        exceptional results.
      </motion.span>
      <br />
      <motion.span variants={childVariants}>
        Let's create remarkable digital experiences{' '}
        <a
          href={`mailto:${MAIL}`}
          className='text-spindrift expand opacity-100'
        >
          together.
        </a>
      </motion.span>
    </motion.p>
  );
};
export default HeroDescription;
