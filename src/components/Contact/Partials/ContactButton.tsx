import React from 'react';

import { MAIL } from '@/lib/vars';
const ContactButton: React.FC = (): JSX.Element => {
  return (
    <div className='relative z-20 flex w-[125px] flex-col items-start justify-start font-mono'>
      <a
        href={`mailto:${MAIL}`}
        className='border-spindrift text-spindrift bg-liberty-blue relative z-20 w-full rounded-sm border px-5 py-2 text-center text-sm font-bold transition duration-150 ease-linear hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform'
      >
        Say Hello
      </a>
      <span className='bg-spindrift absolute left-0 top-0 z-10 h-[39px] w-full transform rounded-sm' />
    </div>
  );
};
export default ContactButton;
