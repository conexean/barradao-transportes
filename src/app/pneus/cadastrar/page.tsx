import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const CadastrarPneuPage: React.FC = () => {
  return (
    <PageLayout title='Cadastrar pneu' showRegisterButton={false}>
      <Maintenance />
    </PageLayout>
  );
};

export default CadastrarPneuPage;
