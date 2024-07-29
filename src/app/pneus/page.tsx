import Breadcrumb from '@/components/breadcrumb';
import Button from '@/components/button';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Link from 'next/link';

const Pneus: React.FC = () => {
  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Pneus',
    links: [
      {
        label: 'Pneus',
        href: '/pneus',
        active: true,
      },
    ],
  };

  return (
    <>
      <Breadcrumb title={breadcrumbProps.title} links={breadcrumbProps.links} />
      <div className='flex items-center justify-end'>
        <Link href={'/pneus/cadastrar'}>
          <Button color='blue' type='button'>
            Novo pneu
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Pneus;
