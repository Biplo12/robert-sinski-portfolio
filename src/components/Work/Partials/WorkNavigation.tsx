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
      <div className='flex flex-col items-start justify-center'>
        {workNavItems.map((item, index) => {
          return (
            <button
              key={index}
              className={`flex min-w-[200px] items-center justify-start border-l-2 px-4 py-2 pl-8 transition-all duration-300 ease-in-out ${
                activeItem === index
                  ? 'border-spindrift bg-spindrift text-spindrift bg-opacity-[0.075]'
                  : 'border-spindrift border-opacity-[0.075]'
              } hover:bg-spindrift hover:text-spindrift hover:bg-opacity-[0.075]`}
              onClick={() => handleActiveItem(index)}
            >
              <div className='h-[1px] w-[1px] bg-white bg-opacity-20' />
              <h3 className='text-left text-sm font-bold'>{item}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default WorkNavigation;
