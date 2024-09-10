'use client';

import React from 'react';
import PageLayout from '@/ui/layouts/page-layout';
import Maintenance from '@/ui/components/maintenance';

const ViagensPage: React.FC = () => {
  return (
    <PageLayout
      title='Viagens'
      showBackButton={false}
      showRegisterButton={false}
    >
      <Maintenance />
    </PageLayout>
  );
};

export default ViagensPage;
