import Breadcrumb from '@/components/breadcrumb';
import Button from '@/components/button';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import DefaultLayout from '@/layouts/default-layout';
import Link from 'next/link';

export default function Home() {
  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Passo a passo',
    links: [
      {
        label: 'Home',
        href: '/',
        active: true,
      },
    ],
  };

  return (
    <DefaultLayout>
      <Breadcrumb title={breadcrumbProps.title} links={breadcrumbProps.links} />
    </DefaultLayout>
  );
}
