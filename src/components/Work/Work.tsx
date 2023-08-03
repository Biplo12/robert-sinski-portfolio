import React, { useState } from 'react';

import WorkContent from '@/components/Work/Partials/WorkContent';
import WorkHeader from '@/components/Work/Partials/WorkHeader';
import WorkNavigation from '@/components/Work/Partials/WorkNavigation';
const Work: React.FC = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className='flex h-auto min-h-[80vh] w-full flex-col items-center justify-center py-10'>
      <WorkHeader />
      <div className='mt-10 flex min-h-[350px] w-full max-w-[975px] items-start justify-center gap-10'>
        <WorkNavigation setActiveItem={setActiveItem} activeItem={activeItem} />
        <WorkContent activeItem={activeItem} />
      </div>
    </div>
  );
};
export default Work;
