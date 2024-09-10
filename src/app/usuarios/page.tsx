'use client';

import React from 'react';
import PageLayout from '@/ui/layouts/page-layout';
import Maintenance from '@/ui/components/maintenance';

const UsuariosPage: React.FC = () => {
  return (
    <PageLayout
      title='Usuários'
      showBackButton={false}
      showRegisterButton={true}
      href='/usuarios/cadastrar'
    >
      <Maintenance />
    </PageLayout>
  );
};

export default UsuariosPage;
