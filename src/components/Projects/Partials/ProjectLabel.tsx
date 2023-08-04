import React from 'react';

interface IProjectLabelProps {
  title: string;
  isLeftSide: boolean;
}

const ProjectLabel: React.FC<IProjectLabelProps> = ({
  title,
  isLeftSide,
}): JSX.Element => {
  return (
    <>
      <h2
        className={`text-spindrift font-mono ${
          isLeftSide ? 'text-left' : 'text-right'
        }`}
      >
        Featured Project
      </h2>

      <h1
        className={`text-gray-text mb-6 text-${
          isLeftSide ? 'left' : 'right'
        } mxmd:text-center font-calibre text-2xl font-bold`}
      >
        {title}
      </h1>
    </>
  );
};
export default ProjectLabel;
