/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import useHeroVariants from '@/hooks/useHeroVariants';

import GitHub from '~/svg/github.svg';
import LinkedIn from '~/svg/linkedin.svg';
const Socials: React.FC = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState({
    github: false,
    linkedin: false,
  });

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://www.github.com/biplo12',
      icon: GitHub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/robert-siński',
      icon: LinkedIn,
    },
  ];

  const { socialsVariants } = useHeroVariants();

  return (
    <motion.div
      className='mxmd:hidden fixed bottom-0 left-6 flex flex-col items-center justify-center gap-5'
      variants={socialsVariants}
      initial='hidden'
      animate='visible'
    >
      {socialLinks.map((sociallink) => (
        <a
          key={sociallink.name}
          href={sociallink.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-spindrift text-2xl transition duration-200 ease-linear hover:text-opacity-80'
          onMouseEnter={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              [sociallink.name.toLowerCase()]: true,
            }))
          }
          onMouseLeave={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              [sociallink.name.toLowerCase()]: false,
            }))
          }
        >
          <sociallink.icon
            stroke={
              isHovered[sociallink.name.toLowerCase() as keyof typeof isHovered]
                ? '#00f0ff'
                : '#fff'
            }
            className='h-6 w-6 duration-200 ease-linear hover:translate-y-[-3.5px] hover:transform'
          />
        </a>
      ))}
      <div
        className={`h-24 w-[1px] ${
          isHovered.github || isHovered.linkedin ? 'bg-spindrift' : 'bg-white'
        }`}
      />
    </motion.div>
  );
};
export default Socials;
