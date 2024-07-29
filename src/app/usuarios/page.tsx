'use client';

import React, { useState, useEffect, useContext } from 'react';
import Button from '@/components/button';
import Table from '@/components/table';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import TableInterface from '@/interfaces/table-users-interface';
import Link from 'next/link';
import Breadcrumb from '@/components/breadcrumb';
import getAllUsers from '@/actions/user/getAllUsers';
import { ResultsContext } from '@/context/results-context';
import Loading from '@/components/loading';
import { useSearchParams } from 'next/navigation';

const Usuarios: React.FC = () => {
  const { resultsPerPage } = useContext(ResultsContext);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  useEffect(() => {
    async function fetchData() {
      const result = await getAllUsers(page, resultsPerPage);
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [page, resultsPerPage]);

  if (loading) {
    return <Loading />;
  }

  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Usuários',
    links: [
      {
        label: 'Usuários',
        href: '/usuarios',
        active: true,
      },
    ],
  };

  const tableProps: TableInterface = {
    headers: ['Nome', 'E-mail', 'Usuário'],
    data: data.users || [],
    totalPages: data.totalPages || 1,
    page: page,
  };

  return (
    <>
      <Breadcrumb title={breadcrumbProps.title} links={breadcrumbProps.links} />
      <div className='flex items-center justify-end'>
        <Link href={'/usuarios/cadastrar'}>
          <Button color='blue' type='button'>
            Novo usuário
          </Button>
        </Link>
      </div>

      <Table
        headers={tableProps.headers}
        data={tableProps.data}
        totalPages={tableProps.totalPages}
        page={tableProps.page}
      />
    </>
  );
};

export default Usuarios;
