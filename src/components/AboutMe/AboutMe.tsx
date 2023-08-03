import React from 'react';

import AboutMeDescription from '@/components/AboutMe/Partials/AboutMeDescription';
import AboutMeHeader from '@/components/AboutMe/Partials/AboutMeHeader';
import AboutMeImage from '@/components/AboutMe/Partials/AboutMeImage';
const AboutMe: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-auto min-h-[80vh] w-full flex-col items-center justify-center py-10'>
      <div>
        <AboutMeHeader />
        <div className='flex'>
          <AboutMeDescription />
          <AboutMeImage />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
