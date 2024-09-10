import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const CadastrarManutencaoPage: React.FC = () => {
  return (
    <PageLayout title='Cadastrar manutenção'>
      <Maintenance />
    </PageLayout>
  );
};

export default CadastrarManutencaoPage;
