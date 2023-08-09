import React from 'react';

import ContactButton from '@/components/Contact/Partials/ContactButton';
import ContactHeader from '@/components/Contact/Partials/ContactHeader';
import ContactSocials from '@/components/Contact/Partials/ContactSocials';
const Contact: React.FC = (): JSX.Element => {
  return (
    <div
      className='flex h-[90vh] w-full flex-col items-center justify-center gap-4'
      id='contact'
    >
      <ContactHeader />
      <ContactButton />
      <ContactSocials />
    </div>
  );
};
export default Contact;
