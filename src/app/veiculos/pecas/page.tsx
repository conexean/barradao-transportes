'use client';

import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const PecasPage: React.FC = () => {
  return (
    <PageLayout
      title='Peças'
      showBackButton={false}
      showRegisterButton={true}
      href='/veiculos/pecas/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default PecasPage;
