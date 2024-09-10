'use client';

import Maintenance from '@/ui/components/maintenance';
import PageLayout from '@/ui/layouts/page-layout';

const CategoriasPage: React.FC = () => {
  return (
    <PageLayout
      title='Categoria de veículo'
      showBackButton={false}
      showRegisterButton={true}
      href='/veiculos/categorias/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default CategoriasPage;
