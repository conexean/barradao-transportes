import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const ConfiguracoesPage = () => {
  return (
    <PageLayout title='Configurações' showBackButton={false}>
      <Maintenance />
    </PageLayout>
  );
};

export default ConfiguracoesPage;
