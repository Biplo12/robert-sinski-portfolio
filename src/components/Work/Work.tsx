import React, { useState } from 'react';

import WorkContent from '@/components/Work/Partials/WorkContent';
import WorkHeader from '@/components/Work/Partials/WorkHeader';
import WorkNavigation from '@/components/Work/Partials/WorkNavigation';
const Work: React.FC = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      className='flex h-screen w-full flex-col items-center justify-center'
      id='expirience'
    >
      <WorkHeader />
      <div className='mxmd:flex-col mxmd:items-start mt-10 flex min-h-[350px] w-full max-w-[975px] items-center justify-center gap-10'>
        <div className='mxmd:mt-0 mt-16 flex h-full flex-col items-start justify-start'>
          <WorkNavigation
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
        </div>
        <WorkContent activeItem={activeItem} />
      </div>
    </div>
  );
};
export default Work;
