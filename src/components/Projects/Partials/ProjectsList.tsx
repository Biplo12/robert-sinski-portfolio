import React from 'react';

import ProjectItem from '@/components/Projects/Partials/ProjectItem';
const ProjectsList: React.FC = (): JSX.Element => {
  const projects = [
    {
      title: 'Sorting Algorithm Visualizer',
      github: 'https://github.com/Biplo12/sorting-algorithms',
      website: 'https://sorting-algorithms-brown.vercel.app/',
      description: [
        'Developed a web application that visually demonstrates various sorting algorithms and their effects on an array of elements.',
        'Created a user-friendly interface where users can observe the sorting process through graphical representations of the array as bars',
        'Implemented multiple sorting algorithms, allowing users to select and visualize different algorithms in action.',
      ],
      tech: ['Vite', 'TypeScript', 'TailwindCSS', 'Vercel'],
      image: '/images/projects/sorting-algorithms.png',
    },
    {
      title: 'A* Pathfinding Visualizer',
      github: 'https://github.com/Biplo12/astar-path-finder',
      website: 'https://path-finder-inky.vercel.app/',
      description: [
        'Developed a web application that utilizes the A* algorithm to find the shortest path between a start point and an end point on a 12x12 grid.',
        'Implemented a user-friendly interface where users can interact with the grid by marking the start point as yellow and the end point as red.',
        'Provided functionality for users to draw walls on the grid, allowing them to create obstacles for the pathfinding algorithm to navigate around.',
      ],
      tech: ['Vite', 'TypeScript', 'TailwindCSS', 'Vercel'],
      image: '/images/projects/path-finder.png',
    },
    {
      title: 'Kamil Siński - Serwis Komputerowy',
      github:
        'https://github.com/Biplo12/kamil-sinski-serwis-komputerowy-Fullstack',
      website: 'https://www.kamilsinski.pl/',
      description: [
        'Developed a website for a local computer repair business',
        'Implemented a user-friendly contact form to facilitate communication with potential clients.',
        'Ensured proper SEO optimization, including meta tags, headings, and page structure, to improve search engine visibility.',
      ],
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
      image: '/images/projects/kamil-sinski.png',
    },
  ];
  return (
    <div className='mxmd:gap-16 relative mt-8 flex max-w-[1125px] flex-wrap justify-center'>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} projectIndex={index} />
      ))}
    </div>
  );
};
export default ProjectsList;
