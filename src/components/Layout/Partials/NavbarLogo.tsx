import React from 'react';
const NavbarLogo: React.FC = (): JSX.Element => {
  return (
    <h1 className='text-spindrift text-3xl font-bold'>
      <a href='/'>
        R<span className='text-xl'>.</span>
      </a>
    </h1>
  );
};
export default NavbarLogo;
