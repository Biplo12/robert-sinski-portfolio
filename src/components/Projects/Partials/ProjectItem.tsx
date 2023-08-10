/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import useSectionVariants from '@/hooks/useSectionVariants';

import ProjectContent from '@/components/Projects/Partials/ProjectContent';

interface IProjectItemProps {
  project: {
    title: string;
    github: string;
    website: string;
    description: string[];
    tech: string[];
    image: string;
  };
  projectIndex: number;
}

const ProjectItem: React.FC<IProjectItemProps> = ({
  project,
  projectIndex,
}): JSX.Element => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const handleInView = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  };
  const side = projectIndex % 2 === 0 ? 'left' : 'right';
  const { sectionVariants } = useSectionVariants();
  return (
    <motion.div
      className={`relative flex w-full flex-col justify-center gap-10 ${
        side === 'left' ? 'items-start' : 'items-end'
      }`}
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
      transition={{ duration: 0.7, delay: projectIndex * 0.1 }}
      onAnimationComplete={handleInView}
    >
      <div
        className={`relative flex w-full flex-col gap-5 ${
          side === 'left' ? 'md:items-start' : 'md:items-end'
        }`}
      >
        <ProjectContent project={project} side={side} />
      </div>
    </motion.div>
  );
};
export default ProjectItem;
