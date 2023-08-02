/* eslint-disable @next/next/no-img-element */
import React from 'react';
const AboutMeImage: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src='/gifs/developer.gif'
        alt='about-me-image'
        className='h-72 w-72'
      />
    </div>
  );
};
export default AboutMeImage;
