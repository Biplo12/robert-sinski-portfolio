import React from 'react';

import { MAIL } from '@/lib/vars';

import AboutMeImage from '@/components/AboutMe/Partials/AboutMeImage';
import AboutMeSkillsList from '@/components/AboutMe/Partials/AboutMeSkillsList';
const AboutMeDescription: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full flex-col items-start justify-center'>
      <div className='mt-4 flex items-center justify-center'>
        <div>
          <p className='text-grey-text font-calibre max-w-[600px] whitespace-pre-wrap break-words'>
            I am a dedicated full-stack engineer who enjoys creating websites
            and web applications that provide great user experiences. I pay
            close attention to detail and strive for a clean and functional
            design in every interface. <br />
            <br />
            On the backend, I focus on building efficient and scalable solutions
            that improve the performance of my projects. I love learning about
            new tools and technologies, which helps me stay updated in the
            fast-paced tech world. With a strong history of successful projects
            and a problem-solving mindset, I am{' '}
            <a
              href='/resume.pdf'
              className='text-spindrift expand opacity-100'
              target='_blank'
              rel='noreferrer'
            >
              currently
            </a>{' '}
            looking for a full-time position as a full-stack engineer. I want to
            use my skills to help create innovative projects that make a
            difference in web development. Let's connect and build something
            great{' '}
            <a
              href={`mailto:${MAIL}`}
              className='text-spindrift expand opacity-100'
            >
              together.
            </a>
          </p>

          <br />
          <p className='text-grey-text max-w-[650px] whitespace-pre-wrap break-words'>
            My expertise lies in developing exceptional websites and web
            applications using cutting-edge technologies like:
            <br />
          </p>
        </div>
        <AboutMeImage />
      </div>
      <AboutMeSkillsList />
    </div>
  );
};
export default AboutMeDescription;
