'use client';

import { useFormState } from 'react-dom';
import Icon from '../icon';
import Label from '../label';
import { FormProps } from '@/types/form-types';
import ErrorMessages from '@/utils/error-messages';
import findErrors from '@/utils/find-errors';
import Input from '../input';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import Submit from '../submit';

const FormLogin: React.FC<FormProps> = ({ action }) => {
  const [state, formAction] = useFormState(action, {
    success: false,
    errors: [],
  });

  const [inputValue, setInputValue] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const ref = useRef<HTMLFormElement>(null);

  const regex = /^[a-z0-9]{0,10}$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (regex.test(value)) {
      setInputValue(value);
    }
  };

  useEffect(() => {
    if (state && state.success && !hasSubmitted) {
      setInputValue('');
      ref.current?.reset();
      toast.success('Usuário autenticado com sucesso!');
      setHasSubmitted(true);
      redirect('/');
    }
  }, [state, hasSubmitted]);

  const usernameErrors = findErrors('username', state.errors);
  const passwordErrors = findErrors('password', state.errors);

  return (
    <form className='mt-6' action={formAction} ref={ref}>
      <div>
        <Label htmlFor='username'>Usuário</Label>
        <Input
          id='username'
          name='username'
          type='text'
          error={usernameErrors.hasErrors}
          value={inputValue}
          onChange={handleChange}
        />
        <ErrorMessages fieldErrors={usernameErrors} />
      </div>

      <div className='mt-4'>
        <div className='flex items-center justify-between'>
          <Label htmlFor='password'>Senha</Label>
        </div>
        <div className='relative flex flex-col items-start'>
          <button className='absolute right-0 top-4 focus:outline-none'>
            <Icon
              name='eye'
              width={20}
              height={20}
              className='mx-4 size-6 text-gray-400 transition-colors duration-300 hover:text-gray-500'
            />
          </button>
          <Input
            id='password'
            name='password'
            type='password'
            className='block'
            error={passwordErrors.hasErrors}
          />
          <ErrorMessages fieldErrors={passwordErrors} />
        </div>
      </div>

      <div className='mt-10'>
        <Submit text='Login' className='w-full' color='blue' />
      </div>
    </form>
  );
};

export default FormLogin;
