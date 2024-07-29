'use client';

import Breadcrumb from '@/components/breadcrumb';
import Button from '@/components/button';
import Loading from '@/components/loading';
import { ResultsContext } from '@/context/results-context';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import TableInterface from '@/interfaces/table-users-interface';
import getAllMeasures from '@/actions/measure/getAllMeasures';
import Table from '@/components/table';

const Medidas: React.FC = () => {
  const { resultsPerPage } = useContext(ResultsContext);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  useEffect(() => {
    async function fetchData() {
      const result = await getAllMeasures(page, resultsPerPage);
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [page, resultsPerPage]);

  if (loading) {
    return <Loading />;
  }

  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Medidas de pneus',
    links: [
      {
        label: 'Medidas de pneu',
        href: '/pneus/medidas',
        active: true,
      },
    ],
  };

  const tableProps: TableInterface = {
    headers: ['Medida'],
    data: data.measures || [],
    totalPages: data.totalPages || 1,
    page: page,
  };

  return (
    <>
      <Breadcrumb title={breadcrumbProps.title} links={breadcrumbProps.links} />
      <div className='flex items-center justify-end'>
        <Link href={'/pneus/medidas/cadastrar'}>
          <Button color='blue' type='button'>
            Nova medida
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

export default Medidas;
