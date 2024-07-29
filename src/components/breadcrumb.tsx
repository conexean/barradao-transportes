import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Icon from './icon';
import Link from 'next/link';

const Breadcrumb: React.FC<BreadcrumbInterface> = ({ title, links }) => {
  return (
    <div className='mb-6 flex items-center justify-end overflow-x-auto whitespace-nowrap py-4'>
      <Link href={'/'} className='text-gray-600'>
        <Icon name='home' width={20} height={20} />
      </Link>
      {links.map((link, index) => (
        <div className='flex items-center' key={index}>
          <span className='mx-5 text-gray-500 rtl:-scale-x-100'>
            <Icon name='bigger' width={20} height={20} />
          </span>

          <Link
            href={link.href}
            className={`${link.active ? 'text-blue-600' : 'text-gray-600'}`}
          >
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
