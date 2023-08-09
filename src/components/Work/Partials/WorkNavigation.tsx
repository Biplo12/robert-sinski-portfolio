import { motion } from 'framer-motion';
import React from 'react';

interface IWorkNavigationProps {
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
}

const WorkNavigation: React.FC<IWorkNavigationProps> = ({
  setActiveItem,
  activeItem,
}): JSX.Element => {
  const workNavItems = ['Anfata Games', 'Mateusz Ludyga'];
  const handleActiveItem = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div>
      <div className='flex flex-col items-start justify-center font-mono'>
        {workNavItems.map((item, index) => {
          return (
            <button
              key={index}
              className={`hover:bg-spindrift hover:text-spindrift relative flex min-h-[40px] min-w-[200px] items-center justify-start bg-opacity-[0.075] transition-all duration-300 ease-in-out hover:bg-opacity-[0.075]
                  ${
                    activeItem === index
                      ? 'border-spindrift bg-spindrift text-spindrift bg-opacity-[0.075]'
                      : 'border-spindrift'
                  }
              `}
              onClick={() => handleActiveItem(index)}
            >
              {activeItem === index ? (
                <motion.div
                  className='bg-spindrift absolute left-0 top-0 h-[40px] w-[2px]'
                  layoutId='underline'
                />
              ) : null}
              <h3 className='ml-8 text-left text-sm font-bold'>{item}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default WorkNavigation;
