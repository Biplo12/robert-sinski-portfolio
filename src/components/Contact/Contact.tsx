import { motion } from 'framer-motion';
import React, { useState } from 'react';

import useSectionVariants from '@/hooks/useSectionVariants';

import ContactButton from '@/components/Contact/Partials/ContactButton';
import ContactHeader from '@/components/Contact/Partials/ContactHeader';
import ContactSocials from '@/components/Contact/Partials/ContactSocials';
const Contact: React.FC = (): JSX.Element => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const { sectionVariants } = useSectionVariants();

  const handleInView = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  };
  return (
    <motion.div
      className='flex h-[90vh] w-full flex-col items-center justify-center gap-4'
      id='contact'
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
      <ContactHeader />
      <ContactButton />
      <ContactSocials />
    </motion.div>
  );
};
export default Contact;
