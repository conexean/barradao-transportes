import Image from 'next/image';
import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-start'>
      <div className='mb-6 flex w-full justify-between'>
        <h1 className='text-xl font-medium text-gray-700'>
          Estamos realizando melhorias!
        </h1>

        <Image
          width={180}
          height={40}
          priority
          src={'/img/logomarca-conexean.png'}
          alt='Logomarca Conexean'
        />
      </div>
      <p className='mt-4 w-full text-lg font-medium text-gray-700'>
        A página está temporariamente indisponível enquanto implementamos
        melhorias para otimizar sua experiência e funcionalidade. Voltaremos em
        breve com novidades!
      </p>
      <Image
        className='h-[380px] w-auto'
        src='/img/maintenance.svg'
        alt='Página em manutenção'
        width={0}
        height={0}
        priority
      />
    </div>
  );
};

export default Maintenance;
