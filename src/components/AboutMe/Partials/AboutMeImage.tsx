/* eslint-disable @next/next/no-img-element */
import React from 'react';
const AboutMeImage: React.FC = (): JSX.Element => {
  return (
    <div className='mxmd:hidden flex flex-col items-start justify-start'>
      <img
        src='/gifs/developer.gif'
        alt='about-me-image'
        className='ml-8 h-72 w-72 object-contain'
      />
    </div>
  );
};
export default AboutMeImage;
