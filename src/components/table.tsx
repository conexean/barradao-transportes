'use client';

import TableHeader from '@/components/table-header';
import Td from '@/components/td';
import Th from '@/components/th';
import Tr from '@/components/tr';
import TableInterface from '@/interfaces/table-users-interface';
import Pagination from './pagination';
import ResultForPage from './result-for-page';

const Table: React.FC<TableInterface> = ({
  headers,
  data,
  totalPages,
  page,
}) => {
  return (
    <div className='mt-4'>
      <ResultForPage title='Registros por página' />
      <div className='mt-4 flex flex-col'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <TableHeader>
                  <tr>
                    <Th className='w-[40px]'>#</Th>
                    {headers &&
                      headers.map((header, index) => (
                        <Th key={index}>{header}</Th>
                      ))}
                    <Th className='w-[96px]'></Th>
                  </tr>
                </TableHeader>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {data.map((item, index) => (
                    <Tr key={index}>
                      {Object.values(item).map((value, subIndex) => (
                        <Td key={subIndex}>{value}</Td>
                      ))}
                      <td className='whitespace-nowrap p-4 text-sm'>
                        <div className='flex items-center gap-x-6'>
                          <button className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='size-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
                          </button>

                          <button className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='size-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </Tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={totalPages} page={page} />
    </div>
  );
};

export default Table;
