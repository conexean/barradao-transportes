'use client';

import { ActiveContext } from '@/context/active-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useContext, useState } from 'react';
import Icon from './icon';
import CheckActiveRoute from '@/utils/check-active-route';
import linksMenu from '@/constants/links-menu';

interface SidebarInterface {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarInterface> = ({ children }) => {
  const pathname = usePathname();

  const { active } = useContext(ActiveContext);
  const [search, setSearch] = useState('');

  const filteredLinksMenu =
    search.length > 0
      ? linksMenu
          .map((section) => ({
            ...section,
            links: section.links.filter((link) =>
              link.label.toLowerCase().includes(search.toLowerCase()),
            ),
          }))
          .filter((section) => section.links.length > 0)
      : linksMenu;

  return (
    <aside
      className={`fixed inset-y-0 left-0 h-screen w-full flex-col overflow-y-auto border-r bg-white px-5 pb-8 pt-4 transition-all duration-300 ease-in-out rtl:border-l rtl:border-r-0 ${active ? 'translate-x-0 md:w-[57px]' : '-translate-x-full md:w-[250px] md:translate-x-0'} z-50`}
    >
      <div className='flex flex-1 flex-col justify-between'>
        <nav className='-mx-3 space-y-6'>
          {children}
          <div className={`${active ? 'hidden' : 'relative'} mx-3`}>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='size-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </span>

            <input
              type='text'
              className='w-full rounded-md border bg-white py-1.5 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Pesquisar...'
            />
          </div>
          <div className='space-y-2'>
            {filteredLinksMenu.map((item, itemIndex) => (
              <div key={itemIndex} className='space-y-2'>
                {item.menu && (
                  <label
                    className={`${active ? 'hidden' : 'block'} px-3 pb-2 pt-3 text-xs uppercase text-gray-500`}
                  >
                    {item.menu}
                  </label>
                )}
                {item.links.map((link, linkIndex) => (
                  <Link
                    href={link.href}
                    key={linkIndex}
                    className={`${CheckActiveRoute({ pathname, link: link.href }) ? 'bg-blue-600 text-white hover:bg-blue-500' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded-lg px-[9px] py-2 transition-colors duration-300`}
                  >
                    <Icon
                      name={link.icon}
                      width={22}
                      height={22}
                      className='me-3 min-w-[22px]'
                    />
                    <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                      {link.label}
                    </span>
                  </Link>
                ))}
                {item.menu && <hr className='mt-3 border-gray-200 pb-3' />}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
