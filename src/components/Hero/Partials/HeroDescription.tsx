import React from 'react';

import { MAIL } from '@/lib/vars';
const HeroDescription: React.FC = (): JSX.Element => {
  return (
    <p className='text-grey-text mxmd:text-md exsm text-lg:text-sm mt-4'>
      Passionate about learning and problem-solving. <br />
      Actively seeking new opportunities to contribute expertise and deliver
      exceptional results. <br />
      Let's create remarkable digital experiences{' '}
      <a href={`mailto:${MAIL}`} className='text-spindrift expand opacity-100'>
        together.
      </a>
    </p>
  );
};
export default HeroDescription;
