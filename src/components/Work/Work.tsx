import { motion } from 'framer-motion';
import React, { useState } from 'react';

import useSectionVariants from '@/hooks/useSectionVariants';

import WorkContent from '@/components/Work/Partials/WorkContent';
import WorkHeader from '@/components/Work/Partials/WorkHeader';
import WorkNavigation from '@/components/Work/Partials/WorkNavigation';

const Work: React.FC = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const { sectionVariants } = useSectionVariants();

  const handleInView = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  };

  return (
    <motion.div
      className='mxmd:py-10 flex h-screen w-full flex-col items-center justify-center'
      id='expirience'
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
      onAnimationComplete={handleInView}
    >
      <WorkHeader />
      <div className='mxmd:flex-col mxmd:items-start mxmd:min-h-[600px] mt-10 flex h-auto min-h-[350px] w-full max-w-[975px] items-center justify-start gap-10'>
        <div className='mxmd:mt-0 mxmd:h-auto mt-16 flex h-full min-h-[75px] flex-col items-start justify-start'>
          <WorkNavigation
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
        </div>
        <div className='flex h-full items-start justify-start'>
          <WorkContent activeItem={activeItem} />
        </div>
      </div>
    </motion.div>
  );
};
export default Work;
