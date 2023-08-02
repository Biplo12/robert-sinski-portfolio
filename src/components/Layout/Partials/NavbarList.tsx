import React from 'react';
const NavbarList: React.FC = (): JSX.Element => {
  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Expirience', href: '/' },
    { name: 'Work', href: '/' },
    { name: 'Contact', href: '/' },
  ];

  return (
    <ul className='mr-3 flex justify-end gap-3'>
      {navItems.map((item, index) => (
        <li key={index} className='px-4'>
          <a
            href={item.href}
            className='hover:text-spindrift text-sm text-white transition duration-200 ease-linear'
          >
            <span className='text-spindrift'>0{index + 1}. </span>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default NavbarList;
