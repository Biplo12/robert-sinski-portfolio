import React from 'react';
const HeroHeader: React.FC = (): JSX.Element => {
  return (
    <>
      <h4 className='text-spindrift font-mono text-lg'>Hi, my name is</h4>
      <h1 className='mxmd:text-[2.875rem] font-mono text-[5rem] font-bold'>
        <span className='text-white'>Robert</span>{' '}
        <span className='text-spindrift'>Siński.</span>
      </h1>
      <h2 className='mxmd:text-[1.575rem] font-mono text-[2.5rem] font-bold'>
        Full stack engineer, based in Poland.
      </h2>
    </>
  );
};
export default HeroHeader;
