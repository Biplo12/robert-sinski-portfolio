/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
  const side = projectIndex % 2 === 0 ? 'left' : 'right';
  return (
    <div
      className={`relative flex w-full flex-col justify-center gap-10 ${
        side === 'left' ? 'items-start' : 'items-end'
      }`}
    >
      <div
        className={`relative flex w-full flex-col gap-5 ${
          side === 'left' ? 'md:items-start' : 'md:items-end'
        }`}
      >
        <ProjectContent project={project} side={side} />
      </div>
    </div>
  );
};
export default ProjectItem;
