import React from 'react';

import ContactButton from '@/components/Contact/Partials/ContactButton';
import ContactHeader from '@/components/Contact/Partials/ContactHeader';
const Contact: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-[80vh] w-full flex-col items-center justify-center gap-4'>
      <ContactHeader />
      <ContactButton />
    </div>
  );
};
export default Contact;
