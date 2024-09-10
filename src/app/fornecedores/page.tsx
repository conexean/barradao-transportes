'use client';

import React from 'react';
import PageLayout from '@/ui/layouts/page-layout';
import Maintenance from '@/ui/components/maintenance';

const FornecedoresPage: React.FC = () => {
  return (
    <PageLayout
      title='Fornecedores'
      showBackButton={false}
      showRegisterButton={false}
    >
      <Maintenance />
    </PageLayout>
  );
};

export default FornecedoresPage;
