import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';

import ProjectItem from '@/components/Projects/Partials/ProjectItem';

const REPOSITORIES_LINK = 'https://github.com/Biplo12?tab=repositories';

const ProjectsList: React.FC = (): JSX.Element => {
  const projects = [
    {
      title: 'Likeness API v1',
      github: 'https://github.com/Biplo12/likeness-api',
      website: 'https://likeness-api.vercel.app/',
      description: [
        'Text Comparison: Likeness API v1 allows users to compare the similarity of 2 strings',
        'Secure Authentication: Users can sign in via Google or GitHub accounts',
        'Simple Integration: The API provides a straightforward endpoint for text comparison',
      ],
      tech: ['Next', 'Tailwind', 'Typescript', 'Clerk', 'Prisma', 'MongoDB'],
    },
    {
      title: 'Realtime Colors Application Clone',
      github: 'https://github.com/Biplo12/realtime-colors-clone',
      website: 'https://realtime-colors-clone.vercel.app/',
      description: [
        'Crafted an interactive color playground inspired by Realtime Colors, demonstrating frontend skills through a user-friendly interface and dynamic color customization.',
        'Designed an intuitive interface with features like color randomization and locking, providing users with an engaging platform to experiment with color palettes.',
        'Implemented export options and keyboard shortcuts for easy color integration into projects, demonstrating attention to user experience and accessibility.',
      ],
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    },
    {
      title: 'Kamil Siński - Serwis Komputerowy',
      github:
        'https://github.com/Biplo12/kamil-sinski-serwis-komputerowy-Fullstack',
      website: 'https://www.kamilsinski.pl/',
      description: [
        'Developed a website for a local computer repair business.',
        'Implemented a user-friendly contact form to facilitate communication with potential clients.',
        'Ensured proper SEO optimization, including meta tags, headings, and page structure, to improve search engine visibility.',
      ],
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    },
  ];
  return (
    <div className='relative mt-8 flex max-w-[1125px] flex-wrap justify-center gap-16'>
      {projects.map((project, index) => (
        <Fragment key={index}>
          <AnimatePresence>
            <ProjectItem project={project} projectIndex={index} />
          </AnimatePresence>
        </Fragment>
      ))}
      <div className='relative z-20 flex flex-col items-start justify-start font-mono'>
        <a
          href={REPOSITORIES_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='border-spindrift text-spindrift bg-liberty-blue relative z-20 w-[175px] rounded-sm border px-5 py-2 text-center text-sm font-bold transition duration-150 ease-linear hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform'
        >
          And much more...
        </a>
        <span className='bg-spindrift absolute left-0 top-0 z-10 h-[39px] w-[175px] transform rounded-sm' />
      </div>
    </div>
  );
};
export default ProjectsList;
