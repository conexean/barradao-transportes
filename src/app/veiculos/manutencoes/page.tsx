'use client';

import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const ManutencoesPage: React.FC = () => {
  return (
    <PageLayout
      title='Manutenções'
      showBackButton={false}
      showRegisterButton={true}
      href='/veiculos/manutencoes/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default ManutencoesPage;
