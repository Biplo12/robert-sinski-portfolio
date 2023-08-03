import React from 'react';

import { MAIL } from '@/lib/vars';

import AboutMeImage from '@/components/AboutMe/Partials/AboutMeImage';
import AboutMeSkillsList from '@/components/AboutMe/Partials/AboutMeSkillsList';
const AboutMeDescription: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full flex-col items-start justify-center'>
      <div className='mt-4 flex items-center justify-center'>
        <div>
          <p className='text-grey-text max-w-[600px] whitespace-pre-wrap break-words'>
            As a passionate and versatile full-stack engineer, I find joy in
            crafting digital marvels that breathe life on the internet. My
            expertise lies in developing exceptional websites and web
            applications that deliver seamless, user-centric experiences. With a
            sharp eye for detail and a dedication to pixel-perfect design, I
            ensure every interface exudes elegance and usability. <br />
            <br />
            On the backend, I thrive on creating modern, efficient, and scalable
            solutions that drive the performance of these digital creations. My
            insatiable curiosity and love for learning keep me on the cutting
            edge of technology, constantly exploring new tools and techniques.
            With a solid track record of successful projects and a knack for
            problem-solving, I am{' '}
            <a
              href='/resume.pdf'
              className='text-spindrift expand opacity-100'
              target='_blank'
              rel='noreferrer'
            >
              actively
            </a>{' '}
            seeking a full-time position as a full-stack engineer. My ambition
            is to contribute my skills and ingenuity to innovative ventures,
            making a significant impact in the world of web development. Let's
            connect and build something extraordinary{' '}
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
