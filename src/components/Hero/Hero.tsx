import React from 'react';

import HeroButton from '@/components/Hero/Partials/HeroButton';
import HeroDescription from '@/components/Hero/Partials/HeroDescription';
import HeroHeader from '@/components/Hero/Partials/HeroHeader';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='mx-auto w-full max-w-[1000px]'>
      <HeroHeader />
      <HeroDescription />
      <HeroButton />
    </div>
  );
};
export default Hero;
