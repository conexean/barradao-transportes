'use client';

import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const MedidasPage: React.FC = () => {
  return (
    <PageLayout
      title='Medidas de pneus'
      showBackButton={false}
      showRegisterButton={true}
      href='/pneus/medidas/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default MedidasPage;
