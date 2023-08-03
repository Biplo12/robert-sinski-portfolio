import React from 'react';

const ContactHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <h3 className='text-spindrift text-center text-2xl font-bold'>
        04. What's Next?
      </h3>
      <h1 className='text-center text-5xl font-bold'>Get In Touch</h1>
      <p className='text-gray-text mt-4 max-w-[500px] text-center'>
        I am currently looking for any new opportunities, my inbox is always
        open. If you have a job offer or just want to say hi, feel free to
        contact me.
      </p>
    </div>
  );
};
export default ContactHeader;
