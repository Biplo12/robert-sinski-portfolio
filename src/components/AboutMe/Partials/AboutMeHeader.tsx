import React from 'react';
const AboutMeHeader: React.FC = (): JSX.Element => {
  return (
    <div className='mx-auto mb-4 flex w-full max-w-[975px] items-center justify-start gap-4'>
      <h2 className='text-center text-2xl font-bold text-white'>
        <span className='text-spindrift text-xl'>01. </span>
        About Me
      </h2>
      <div className='h-[1px] w-full max-w-[480px] bg-white bg-opacity-20' />
    </div>
  );
};
export default AboutMeHeader;
