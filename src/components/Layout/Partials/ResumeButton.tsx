import { motion } from 'framer-motion';
import React from 'react';

interface IResumeButtonProps {
  isMenuOpen?: boolean;
}

const ResumeButton: React.FC<IResumeButtonProps> = ({
  isMenuOpen = false,
}): JSX.Element => {
  return (
    <motion.div
      className='mxmd:px-0 px-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 5 * 0.1 }}
    >
      <div
        className={`relative z-20 flex flex-col items-start justify-start font-mono ${
          isMenuOpen ? 'mxmd:flex' : 'mxmd:hidden'
        }`}
      >
        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='border-spindrift text-spindrift bg-liberty-blue relative z-20 w-[86px] rounded-sm border px-5 py-2 text-center text-sm font-bold transition duration-150 ease-linear hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform'
        >
          Resume
        </a>
        <span className='bg-spindrift absolute left-0 top-0 z-10 h-[39px] w-[85px] transform rounded-sm' />
      </div>
    </motion.div>
  );
};
export default ResumeButton;
