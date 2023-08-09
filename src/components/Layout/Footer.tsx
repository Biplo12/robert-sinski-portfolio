import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='mb-4 flex w-full flex-col items-center justify-center'>
      <h3 className='text-grey-text font-mono text-[0.75rem]'>
        Build by <span className='text-spindrift'>Robert Siński</span>
      </h3>
      <h3 className='text-grey-text font-mono text-[0.75rem]'>
        Design heavily inspired by{' '}
        <span className='text-spindrift'>Brittany Chiang</span>
      </h3>
    </footer>
  );
};
export default Footer;
