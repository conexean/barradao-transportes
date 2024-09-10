'use client';

import { FormProps } from '@/types/form-types';
import Input from '../input';
import { MdArrowForwardIos } from 'react-icons/md';

const FormLogin: React.FC<FormProps> = ({ action }) => {
  return (
    <form className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
      <Input id='ususername' name='username' label='Usuário' />

      <Input id='password' name='password' label='Senha' type='password' />

      <button className='flex w-full items-center justify-between rounded bg-blue-500 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50'>
        <span>Fazer login </span>

        <MdArrowForwardIos size={18} />
      </button>
    </form>
  );
};

export default FormLogin;
