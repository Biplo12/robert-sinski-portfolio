import { motion } from 'framer-motion';
import React from 'react';

import useHeroVariants from '@/hooks/useHeroVariants';

const HeroButton: React.FC = (): JSX.Element => {
  const { buttonVariants } = useHeroVariants();
  return (
    <motion.div
      className='relative z-20 flex flex-col items-start justify-start font-mono'
      variants={buttonVariants}
      initial='hidden'
      animate='visible'
    >
      <a
        href='/resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='border-spindrift text-spindrift bg-liberty-blue relative z-20 mt-10 w-[200px] rounded-sm border px-5 py-3.5 text-center text-sm font-bold transition duration-150 ease-linear hover:translate-x-[-2.5px] hover:translate-y-[-5px] hover:transform'
      >
        Check out my resume!
      </a>
      <span className='bg-spindrift absolute left-0 top-10 z-10 h-12 w-[200px] transform rounded-sm' />
    </motion.div>
  );
};

export default HeroButton;
