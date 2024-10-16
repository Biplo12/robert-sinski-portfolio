import React from 'react';

const skillsData = [
  {
    title: 'Languages:',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend:',
    skills: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Jest'],
  },
  {
    title: 'Backend:',
    skills: ['Node.js', 'Convex', 'Express.js', 'MongoDB', 'Firebase'],
  },
];

const AboutMeSkillsList: React.FC = (): JSX.Element => {
  return (
    <ul className='mxmd:flex-col mxmd:gap-0 marker:text-spindrift flex gap-20 font-mono text-white'>
      {skillsData.map((category) => (
        <li key={category.title}>
          <br />
          <h3 className='text-spindrift mb-2 font-bold'>{category.title}</h3>
          <ul className='list-inside list-disc'>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AboutMeSkillsList;
