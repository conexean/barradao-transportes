import Breadcrumb from '@/components/breadcrumb';
import Button from '@/components/button';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Link from 'next/link';

const Veiculos: React.FC = () => {
  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Veículos',
    links: [
      {
        label: 'Veículos',
        href: '/veiculos',
        active: true,
      },
    ],
  };

  return (
    <>
      <Breadcrumb title={breadcrumbProps.title} links={breadcrumbProps.links} />
      <div className='flex items-center justify-end'>
        <Link href={'/veiculos/cadastrar'}>
          <Button color='blue' type='button'>
            Novo veiculo
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Veiculos;
