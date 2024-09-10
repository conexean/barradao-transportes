'use client';

import { ResultsContext } from '@/context/results-context';
import { useContext, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface ResultForPageInterface {
  title: string;
}

const ResultForPage: React.FC<ResultForPageInterface> = ({ title }) => {
  const { active, toggle, resultsPerPage, results, setResultsPerPage } =
    useContext(ResultsContext);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleResultsPerPageChange = (number: number) => {
    setResultsPerPage(number);
    toggle(); // Fecha o menu dropdown após selecionar
    router.push('/usuarios?page=1');
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (active) {
          toggle();
        }
      }
    },
    [active, toggle],
  );

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClickOutside]);

  return (
    <div className='flex items-center justify-start gap-x-2'>
      <h2 className='text-lg font-medium text-gray-800'>{title}</h2>
      <div className='relative inline-block' ref={dropdownRef}>
        <button
          className='relative z-10 flex items-center rounded-lg border border-transparent bg-white p-2 text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300/40'
          onClick={toggle}
        >
          <span className='mx-1'>{resultsPerPage}</span>
        </button>

        <div
          className={`${active ? 'absolute' : 'hidden'} right-0 z-20 mt-2 w-40 origin-top-right overflow-hidden rounded-md bg-white py-2 shadow-xl`}
        >
          {results.map((number, index) => (
            <div key={index}>
              <span
                className='block cursor-pointer px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100'
                onClick={() => handleResultsPerPageChange(number)}
              >
                {number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultForPage;
