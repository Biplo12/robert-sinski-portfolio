import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface IWorkContentProps {
  activeItem: number;
}

const WorkContent: React.FC<IWorkContentProps> = ({
  activeItem,
}): JSX.Element => {
  const workContent = [
    {
      title: 'Fundacja "Polskie Maki"',
      linkLabel: '@PolskieMaki',
      link: 'https://polskiemaki.org/',
      date: 'October 2023 - December 2023',
      description: [
        'Designed & developed responsive website for two online games.',
        'Multiplayer sessions without user logins, like Kahoot.',
        'Integrated geolocation maps and location-specific quizzes.',
        'Created leaderboards, virtual card collection, and game summaries.',
        'Mobile-friendly with QR code scanning; desktop support.',
        "Expanded client's database; enabled email result export.",
        'Utilized FIGMA for graphics and design.',
      ],
    },
    {
      title: 'Anfata Games',
      linkLabel: '@AnfataGames',
      link: 'https://arrland.com/',
      date: 'September 2022 - August 2023',
      description: [
        "Developing and integrating innovative functionalities for the company's websites and applications",
        'Crafting serverless functions utilizing Firestore and Parse cloud functions',
        'Scripting in Node.js and Python to automate various tasks',
        'Implementing smart contracts within the frontend architecture',
        'Conducting thorough testing and debugging to ensure optimal performance and functionality',
        'Collaborating with cross-functional teams to gather requirements and deliver seamless user experiences',
      ],
    },
    {
      title: 'Mateusz Ludyga',
      link: 'https://arrland.com/',
      date: 'May 2021 - June 2021',
      description: [
        'Specializing in crafting stunning, user-friendly WordPress websites tailored to your business needs.',
        'Engage audience with compelling and persuasive content, including website copy and social media posts.',
        'Improve online visibility and search engine rankings through effective SEO strategies and keyword research.',
      ],
    },
  ];
  const item = workContent?.[activeItem];
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={activeItem ? activeItem : 'default'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className='flex w-full max-w-[800px] flex-col items-start justify-center'>
          <div className='flex w-full flex-col items-start justify-center gap-4'>
            <div className='flex w-full flex-col items-start justify-center gap-2'>
              <div className='font-calibre flex items-center justify-start gap-2'>
                <h3 className='text-left text-xl font-bold text-white'>
                  {item.title}
                </h3>
                {item.linkLabel && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-spindrift text-left text-sm font-bold'
                  >
                    {item.linkLabel}
                  </a>
                )}
              </div>
              <h4 className='text-left font-mono text-sm font-bold text-white'>
                {item.date}
              </h4>
            </div>
            <ul className='marker:text-spindrift font-calibre flex w-full list-inside list-disc flex-col items-start justify-center gap-2'>
              {item.description.map((description, index) => {
                return (
                  <li
                    key={index}
                    className='text-grey-text max-w-[600px] text-left text-sm'
                  >
                    {description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default WorkContent;
