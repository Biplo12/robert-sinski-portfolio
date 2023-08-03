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
      {isLeftSide && (
        <h2 className='text-spindrift text-left'>Featured Project</h2>
      )}
      {!isLeftSide && (
        <h2 className='text-spindrift text-right'>Featured Project</h2>
      )}
      <h1
        className={`text-gray-text mb-6 text-${
          isLeftSide ? 'left' : 'right'
        } mxmd:text-center text-2xl font-bold`}
      >
        {title}
      </h1>
    </>
  );
};
export default ProjectLabel;
