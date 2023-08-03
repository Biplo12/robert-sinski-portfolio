import React from 'react';
const WorkHeader: React.FC = (): JSX.Element => {
  return (
    <div className='mx-auto mb-4 flex w-full max-w-[975px] items-center justify-start gap-4'>
      <h2 className='text-left text-2xl font-bold text-white'>
        <span className='text-spindrift text-xl'>02. </span>
        Work history
      </h2>
      <div className='h-[1px] w-full max-w-[625px] bg-white bg-opacity-20' />
    </div>
  );
};
export default WorkHeader;
