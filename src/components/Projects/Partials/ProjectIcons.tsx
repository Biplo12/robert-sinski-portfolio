import React, { useState } from 'react';

import GithubIcon from '~/svg/github.svg';
import LinkIcon from '~/svg/link.svg';

interface IProjectIconsProps {
  github: string;
  website: string;
}

interface IHoverState {
  [key: string]: boolean;
}

const ProjectIcons: React.FC<IProjectIconsProps> = ({
  github,
  website,
}): JSX.Element => {
  const projects = [
    {
      github,
      website,
    },
  ];

  const [isHovered, setIsHovered] = useState<IHoverState>(
    projects.reduce((acc, project) => {
      acc[project.github] = false;
      acc[project.website] = false;
      return acc;
    }, {} as IHoverState)
  );

  const handleMouseEnter = (url: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [url]: true,
    }));
  };

  const handleMouseLeave = (url: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [url]: false,
    }));
  };

  return (
    <ul className='mt-2 flex items-end justify-end gap-3'>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <a href={project.github} target='_blank' rel='noreferrer'>
            <GithubIcon
              className='h-6 w-6'
              onMouseEnter={() => handleMouseEnter(project.github)}
              onMouseLeave={() => handleMouseLeave(project.github)}
              stroke={isHovered[project.github] ? '#00f0ff' : '#fff'}
            />
          </a>
          <a href={project.website} target='_blank' rel='noreferrer'>
            <LinkIcon
              className='h-6 w-6'
              onMouseEnter={() => handleMouseEnter(project.website)}
              onMouseLeave={() => handleMouseLeave(project.website)}
              stroke={isHovered[project.website] ? '#00f0ff' : '#fff'}
            />
          </a>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ProjectIcons;
