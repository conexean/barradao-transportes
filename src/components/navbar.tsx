'use client';

import { ActiveContext } from '@/context/active-context';
import { useContext } from 'react';

import Icon from './icon';
import FormLogout from './forms/form-logout';

const Navbar: React.FC = () => {
  const { active, toggle } = useContext(ActiveContext);

  return (
    <nav
      className={`relative bg-white shadow transition-all duration-300 ease-in-out ${active ? 'md:ms-[57px]' : 'md:ms-[250px]'}`}
    >
      <div className='px-5 py-4 md:flex md:items-center md:justify-between'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex'>
            <button
              type='button'
              className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none'
              aria-label='toggle menu'
              onClick={toggle}
            >
              <Icon name='bars' width={22} height={22} />
            </button>
          </div>
          <div className='flex'>
            <FormLogout />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
