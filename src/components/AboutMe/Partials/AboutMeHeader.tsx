import React from 'react';
const AboutMeHeader: React.FC = (): JSX.Element => {
  return (
    <div className='mb-4 flex w-full items-center justify-start gap-4'>
      <h2 className='text-center text-3xl font-bold text-white'>
        <span className='text-spindrift text-xl'>01. </span>
        About Me
      </h2>
      <div className='h-[1px] w-[450px] bg-white bg-opacity-20' />
    </div>
  );
};
export default AboutMeHeader;
