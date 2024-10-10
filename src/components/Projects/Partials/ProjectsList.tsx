import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';

import ProjectItem from '@/components/Projects/Partials/ProjectItem';

const REPOSITORIES_LINK = 'https://github.com/Biplo12?tab=repositories';

const ProjectsList: React.FC = (): JSX.Element => {
  const projects = [
    {
      title: 'SkillBridge (WIP)',
      github: '',
      website: '',
      description: [
        'A platform connecting developers and designers to collaborate on side projects and upskill together.',
        'Features seamless matching, dynamic search, and integrated communication tools.',
        'Aims to foster innovation and professional growth in the tech community.',
      ],
      tech: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Convex'],
    },
    {
      title: 'BoardFlow - Cooperative Whiteboard App',
      github: 'https://github.com/Biplo12/BoardFlow',
      website: 'https://board-flow.vercel.app/',
      description: [
        'Built a collaborative whiteboard application allowing users to create organizations and work together on boards.',
        'Utilized tools such as text, notes, shapes, images, and drawing tools for an interactive experience.',
        'Implemented features for object manipulation including selection, resizing, deletion, and layering.',
      ],
      tech: [
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'Clerk',
        'Convex',
        'Liveblocks',
      ],
    },
    {
      title: 'Realtime Colors Application Clone',
      github: 'https://github.com/Biplo12/realtime-colors-clone',
      website: 'https://realtime-colors-clone.vercel.app/',
      description: [
        'Created an interactive color playground to visualize and customize color schemes.',
        'Features include color randomization, locking colors, and dark/light mode options.',
        'Offers a user-friendly interface with flexible customization capabilities.',
      ],
      tech: ['Vite', 'TailwindCSS', 'TypeScript', 'React'],
    },
    {
      title: 'Airbnb Stay Sync Extension',
      github: 'https://github.com/Biplo12/airbnb-stay-sync-chrome-ext',
      website: '',
      description: [
        'Developed a browser extension to sync Airbnb stays to calendars.',
        'Extracts stay details from the Airbnb website and generates an .ics file for calendar import.',
      ],
      tech: ['JavaScript'],
    },
    {
      title: 'Filmweb Cinemas Data Scraper',
      github: 'https://github.com/Biplo12/filmweb-cinemas-data-scraper',
      website: '',
      description: [
        'Node.js application that scrapes cinema and movie screening data from the Filmweb website.',
        'Utilizes Puppeteer and JSDOM for web scraping and Prisma for database interactions.',
      ],
      tech: ['Puppeteer', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
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
      <div className='relative z-20 flex w-[200px] flex-col items-start justify-start font-mono'>
        <a
          href={REPOSITORIES_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='border-spindrift text-spindrift bg-liberty-blue relative z-20 w-full rounded-sm border px-5 py-2 text-center text-sm font-bold transition duration-150 ease-linear hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform'
        >
          And much more...
        </a>
        <span className='bg-spindrift absolute left-0 top-0 z-10 h-[39px] w-full transform rounded-sm' />
      </div>
    </div>
  );
};
export default ProjectsList;
