'use client';

import React, { useMemo } from 'react';
import TableHeader from '@/ui/components/table-header';
import Td from '@/ui/components/td';
import Th from '@/ui/components/th';
import Tr from '@/ui/components/tr';
import TableInterface from '@/application/interfaces/table-users-interface';
import Pagination from './pagination';
import ResultForPage from './result-for-page';

const MemoizedTh = React.memo(Th);
const MemoizedTd = React.memo(Td);
const MemoizedTr = React.memo(Tr);

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionButtons = React.memo(function ActionButtons({
  onEdit,
  onDelete,
}: ActionButtonsProps) {
  return (
    <div className='flex items-center gap-x-6'>
      <button
        onClick={onDelete}
        className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none'
      >
        {/* <Icon name='trash' width={20} height={20} /> */}
      </button>

      <button
        onClick={onEdit}
        className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none'
      >
        {/* <Icon name='edit' width={20} height={20} /> */}
      </button>
    </div>
  );
});

interface ExtendedTableInterface extends TableInterface {
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}

const Table: React.FC<ExtendedTableInterface> = React.memo(function Table({
  headers,
  data,
  totalPages,
  page,
  onEdit,
  onDelete,
}) {
  const memoizedHeaders = useMemo(
    () =>
      headers.map((header, index) => (
        <MemoizedTh key={index}>{header}</MemoizedTh>
      )),
    [headers],
  );

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
                    <MemoizedTh className='w-[40px]'>#</MemoizedTh>
                    {memoizedHeaders}
                    <MemoizedTh className='w-[96px]'></MemoizedTh>
                  </tr>
                </TableHeader>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {data.map((item) => (
                    <MemoizedTr key={item.id}>
                      {Object.values(item).map((value, subIndex) => (
                        <MemoizedTd key={subIndex}>{value}</MemoizedTd>
                      ))}
                      <td className='whitespace-nowrap p-4 text-sm'>
                        <ActionButtons
                          onEdit={() => onEdit(item.id)}
                          onDelete={() => onDelete(item.id)}
                        />
                      </td>
                    </MemoizedTr>
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
});

export default Table;
