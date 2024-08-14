import React, { useCallback } from 'react';
import Link from 'next/link';
import Icon from './icon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number; // Total de páginas disponíveis
  page: number; // Página atual
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, page }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const pageNumbers: number[] = [];

  // Adicionar as duas primeiras páginas, se existirem
  if (totalPages >= 1) {
    pageNumbers.push(1);
  }
  if (totalPages >= 2) {
    pageNumbers.push(2);
  }

  // Adicionar a página atual e 2 páginas antes e depois dela
  for (let i = page - 1; i <= page + 1; i++) {
    if (i > 1 && i < totalPages - 1) {
      pageNumbers.push(i);
    }
  }

  // Adicionar as duas últimas páginas, se existirem
  if (totalPages >= 3) {
    pageNumbers.push(totalPages - 1);
  }
  if (totalPages >= 2) {
    pageNumbers.push(totalPages);
  }

  // Remover duplicatas e ordenar os números das páginas
  const uniquePageNumbers = Array.from(new Set(pageNumbers)).sort(
    (a, b) => a - b,
  );

  return (
    <div className='mt-6 flex items-center justify-between'>
      {page > 1 ? (
        <div className='flex space-x-2'>
          <Link
            href={pathname + '?' + createQueryString('page', '1')}
            scroll={false}
            className='flex select-none items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:hidden'
          >
            Início
          </Link>
          <Link
            href={pathname + '?' + createQueryString('page', `${page - 1}`)}
            scroll={false}
            className='flex select-none items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100'
          >
            <Icon name='previous' width={22} height={22} />
          </Link>
        </div>
      ) : (
        <div className='flex space-x-2'>
          <span className='flex cursor-not-allowed select-none items-center gap-x-2 rounded-md border bg-gray-200 px-5 py-2 text-sm capitalize text-gray-400'>
            Início
          </span>
          <span className='flex cursor-not-allowed select-none items-center gap-x-2 rounded-md border bg-gray-200 px-5 py-2 text-sm capitalize text-gray-400'>
            <Icon name='previous' width={22} height={22} />
          </span>
        </div>
      )}

      <div className='hidden items-center justify-center lg:flex'>
        {uniquePageNumbers.map((number, index) => (
          <React.Fragment key={number}>
            {index > 0 && uniquePageNumbers[index - 1] !== number - 1 && (
              <span className='mx-1 inline select-none rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white'>
                ...
              </span>
            )}
            <Link
              href={pathname + '?' + createQueryString('page', `${number}`)}
              scroll={false}
              className={`mx-1 flex select-none items-center rounded-md px-4 py-2 transition-colors duration-300 ${
                page === number
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
              passHref
            >
              {number}
            </Link>
          </React.Fragment>
        ))}
      </div>
      {page < totalPages ? (
        <div className='flex space-x-2'>
          <Link
            href={pathname + '?' + createQueryString('page', `${page + 1}`)}
            scroll={false}
            className='flex select-none items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100'
          >
            <Icon name='next' width={22} height={22} />
          </Link>
          <Link
            href={pathname + '?' + createQueryString('page', `${totalPages}`)}
            scroll={false}
            className='flex select-none items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:hidden'
          >
            Final
          </Link>
        </div>
      ) : (
        <div className='flex space-x-2'>
          <span className='flex cursor-not-allowed select-none items-center gap-x-2 rounded-md border bg-gray-200 px-5 py-2 text-sm capitalize text-gray-400'>
            <Icon name='next' width={22} height={22} />
          </span>
          <span className='flex cursor-not-allowed select-none items-center gap-x-2 rounded-md border bg-gray-200 px-5 py-2 text-sm capitalize text-gray-400'>
            Final
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
