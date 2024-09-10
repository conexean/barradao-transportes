'use client';

import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const ServicosPage: React.FC = () => {
  return (
    <PageLayout
      title='Serviços'
      showBackButton={false}
      showRegisterButton={true}
      href='/veiculos/servicos/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default ServicosPage;
