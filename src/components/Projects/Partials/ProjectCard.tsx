import React from 'react';

interface IProjectCardProps {
  description: string[];
  isLeftSide: boolean;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  description,
  isLeftSide,
}): JSX.Element => {
  return (
    <div
      className={`flex items-${
        isLeftSide ? 'start' : 'end'
      } z-20 justify-center bg-[#0d192e]`}
    >
      <ul
        className={`marker:text-spindrift flex w-full list-inside list-disc flex-col items-${
          isLeftSide ? 'start' : 'end'
        } justify-center gap-2 p-8`}
      >
        {description.map((description, index) => (
          <li
            key={index}
            className={`max-w-[600px] text-${
              isLeftSide ? 'left' : 'right'
            } mxmd:text-left text-sm font-bold text-white`}
          >
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectCard;
