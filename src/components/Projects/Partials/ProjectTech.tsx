import React from 'react';

interface IProjectTechProps {
  tech: string[];
}

const ProjectTech: React.FC<IProjectTechProps> = ({ tech }): JSX.Element => {
  return (
    <ul className='mxmd:items-center mxmd:justify-center mt-2 flex flex-wrap items-end justify-end gap-3'>
      {tech.map((tech, index) => (
        <li key={index} className='text-gray-text text-right text-sm font-bold'>
          {tech}
        </li>
      ))}
    </ul>
  );
};
export default ProjectTech;
