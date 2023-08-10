import { motion } from 'framer-motion';
import React, { useState } from 'react';

import useSectionVariants from '@/hooks/useSectionVariants';

import AboutMeDescription from '@/components/AboutMe/Partials/AboutMeDescription';
import AboutMeHeader from '@/components/AboutMe/Partials/AboutMeHeader';

const AboutMe: React.FC = (): JSX.Element => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const { sectionVariants } = useSectionVariants();

  const handleInView = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={
        !animationPlayed
          ? sectionVariants
          : {
              visible: {
                opacity: 1,
                y: 0,
              },
            }
      }
      transition={{ duration: 0.8 }}
      className='flex h-auto min-h-[80vh] w-full flex-col items-center justify-center'
      id='about'
      onAnimationComplete={handleInView}
    >
      <AboutMeHeader />
      <AboutMeDescription />
    </motion.div>
  );
};

export default AboutMe;
