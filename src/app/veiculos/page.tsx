import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const VeiculosPage: React.FC = () => {
  return (
    <PageLayout
      title='Veículos'
      showBackButton={false}
      showRegisterButton={true}
      href='/veiculos/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default VeiculosPage;
