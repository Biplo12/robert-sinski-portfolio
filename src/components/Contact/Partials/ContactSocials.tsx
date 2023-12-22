import React, { useState } from 'react';

import GitHub from '~/svg/github.svg';
import LinkedIn from '~/svg/linkedin.svg';
const ContactSocials: React.FC = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState({
    github: false,
    linkedin: false,
  });
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://www.github.com/biplo12',
      icon: GitHub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/robert-siński',
      icon: LinkedIn,
    },
  ];
  return (
    <div className='mt-4 flex items-center justify-center gap-5'>
      {socialLinks.map((sociallink) => (
        <a
          key={sociallink.name}
          href={sociallink.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-spindrift text-2xl transition duration-200 ease-linear hover:text-opacity-80'
          onMouseEnter={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              [sociallink.name.toLowerCase()]: true,
            }))
          }
          onMouseLeave={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              [sociallink.name.toLowerCase()]: false,
            }))
          }
        >
          <sociallink.icon
            stroke={
              isHovered[sociallink.name.toLowerCase() as keyof typeof isHovered]
                ? '#00f0ff'
                : '#fff'
            }
            className='h-6 w-6 duration-200 ease-linear hover:translate-y-[-3.5px] hover:transform'
          />
        </a>
      ))}
    </div>
  );
};
export default ContactSocials;
