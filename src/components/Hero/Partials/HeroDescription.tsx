import React from 'react';
const HeroDescription: React.FC = (): JSX.Element => {
  const MAIL = 'robert.sinski@outlook.com';
  return (
    <p className='mt-4 text-lg text-[rgba(255,255,255,0.65)]'>
      Passionate about learning and problem-solving. <br />
      Actively seeking new opportunities to contribute expertise and deliver
      exceptional results. <br />
      Let's create remarkable digital experiences{' '}
      <a href={`mailto:${MAIL}`} className='text-spindrift expand opacity-100'>
        together.
      </a>
    </p>
  );
};
export default HeroDescription;
