import Maintenance from '@/ui/components/maintenance';
import DefaultLayout from '@/ui/layouts/default-layout';
import PageLayout from '@/ui/layouts/page-layout';

export default function Home() {
  return (
    <DefaultLayout>
      <PageLayout
        title='Passo a passo'
        showBackButton={false}
        showRegisterButton={false}
      >
        <Maintenance />
      </PageLayout>
    </DefaultLayout>
  );
}
