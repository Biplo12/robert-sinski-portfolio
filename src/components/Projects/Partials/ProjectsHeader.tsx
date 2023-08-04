import React from 'react';
const ProjectsHeader: React.FC = (): JSX.Element => {
  return (
    <div className='mx-auto mb-4 flex w-full max-w-[1125px] items-center justify-start gap-4 font-mono'>
      <h2 className='text-left text-2xl font-bold text-white'>
        <span className='text-spindrift text-xl'>03. </span>
        My projects
      </h2>
      <div className='h-[1px] w-full max-w-[910px] bg-white bg-opacity-20' />
    </div>
  );
};
export default ProjectsHeader;
