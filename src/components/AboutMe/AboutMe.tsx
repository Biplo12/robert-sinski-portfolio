import React from 'react';

import AboutMeDescription from '@/components/AboutMe/Partials/AboutMeDescription';
import AboutMeHeader from '@/components/AboutMe/Partials/AboutMeHeader';
const AboutMe: React.FC = (): JSX.Element => {
  return (
    <div
      className='flex h-auto min-h-[80vh] w-full flex-col items-center justify-center'
      id='about'
    >
      <AboutMeHeader />
      <AboutMeDescription />
    </div>
  );
};
export default AboutMe;
