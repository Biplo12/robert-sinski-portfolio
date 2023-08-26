/* eslint-disable @next/next/no-img-element */
import React from 'react';

import ProjectCard from '@/components/Projects/Partials/ProjectCard';
import ProjectIcons from '@/components/Projects/Partials/ProjectIcons';
import ProjectLabel from '@/components/Projects/Partials/ProjectLabel';
import ProjectTech from '@/components/Projects/Partials/ProjectTech';

interface IProjectContentProps {
  project: {
    title: string;
    github: string;
    website: string;
    description: string[];
    tech: string[];
  };
  side: string;
}

const ProjectContent: React.FC<IProjectContentProps> = ({
  project,
  side,
}): JSX.Element => {
  const isLeftSide = side === 'left';

  return (
    <div
      className={`flex flex-col items-${
        isLeftSide ? 'start' : 'end'
      } mxmd:items-center`}
    >
      <ProjectLabel title={project.title} isLeftSide={isLeftSide} />
      <ProjectCard description={project.description} isLeftSide={isLeftSide} />
      <ProjectTech tech={project.tech} />
      <ProjectIcons github={project.github} website={project.website} />
    </div>
  );
};

export default ProjectContent;
