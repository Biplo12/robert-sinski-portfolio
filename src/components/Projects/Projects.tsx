import React from 'react';

import ProjectsHeader from '@/components/Projects/Partials/ProjectsHeader';
import ProjectsList from '@/components/Projects/Partials/ProjectsList';
const Projects: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-auto min-h-[10vh] w-full flex-col items-center justify-center py-10'>
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
};
export default Projects;
