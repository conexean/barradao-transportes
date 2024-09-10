import Button from '@/ui/components/button';
import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const PneusPage: React.FC = () => {
  return (
    <PageLayout
      title='Pneus'
      showBackButton={false}
      showRegisterButton={true}
      href='/pneus/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default PneusPage;
