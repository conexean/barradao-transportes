'use client';

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineAddCircle, MdArrowCircleLeft } from 'react-icons/md';
import Link from 'next/link';
import Button from '../components/button';

interface IPageLayoutBase {
  children: ReactNode;
  title: string;
  showBackButton?: boolean;
}

interface IPageLayoutWithRegister extends IPageLayoutBase {
  showRegisterButton: true;
  href: string;
}

interface IPageLayoutWithoutRegister extends IPageLayoutBase {
  showRegisterButton?: false;
  href?: never;
}

type IPageLayout = IPageLayoutWithRegister | IPageLayoutWithoutRegister;

const PageLayout: React.FC<IPageLayout> = ({
  children,
  title,
  showBackButton = true,
  showRegisterButton = false,
  href,
}) => {
  const router = useRouter();

  return (
    <section className='my-4 rounded-md bg-white p-4 shadow'>
      <div className='mb-6 flex items-center justify-between'>
        {title && (
          <h2 className='text-xl font-medium text-gray-700'>{title}</h2>
        )}

        <div className='flex gap-2'>
          {showBackButton && (
            <Button color='blue' type='button' onClick={() => router.back()}>
              <MdArrowCircleLeft size={22} className='me-2' />
              Voltar
            </Button>
          )}

          {showRegisterButton && href && (
            <Link href={href}>
              <Button color='green' type='button'>
                <MdOutlineAddCircle size={22} className='me-2' />
                Cadastrar
              </Button>
            </Link>
          )}
        </div>
      </div>
      {children}
    </section>
  );
};

export default PageLayout;
