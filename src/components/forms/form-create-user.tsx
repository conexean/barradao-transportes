'use client';

import { useFormState } from 'react-dom';
import Button from '../button';
import Icon from '../icon';
import Label from '../label';
import { FormProps } from '@/types/form-types';
import ErrorMessages from '@/utils/error-messages';
import findErrors from '@/utils/find-errors';
import Input from '../input';
import { ChangeEvent, useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Submit from '../submit';

const FormCreateUser: React.FC<FormProps> = ({ action }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const regex = /^[a-z0-9]{0,10}$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (regex.test(value)) {
      setInputValue(value);
    }
  };

  const [state, formAction] = useFormState(action, {
    success: false,
    errors: [],
  });

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && !hasSubmitted) {
      setInputValue('');
      ref.current?.reset();
      toast.success('Usuário cadastrado com sucesso!');
      setHasSubmitted(true);
    }
  }, [state.success, hasSubmitted]);

  const nameErrors = findErrors('name', state.errors);
  const lastnameErrors = findErrors('lastname', state.errors);
  const emailErrors = findErrors('email', state.errors);
  const usernameErrors = findErrors('username', state.errors);
  const passwordErrors = findErrors('password', state.errors);
  const confirmpasswordErrors = findErrors('confirmpassword', state.errors);

  return (
    <form
      action={async (event) => {
        setHasSubmitted(false);
        await formAction(event);
      }}
      ref={ref}
    >
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
        <div>
          <Label htmlFor='name'>Nome</Label>
          <Input id='name' name='name' error={nameErrors.hasErrors} />
          <ErrorMessages fieldErrors={nameErrors} />
        </div>
        <div>
          <Label htmlFor='last-name'>Sobrenome</Label>
          <Input
            id='last-name'
            name='lastname'
            error={lastnameErrors.hasErrors}
          />
          <ErrorMessages fieldErrors={lastnameErrors} />
        </div>
        <div>
          <Label htmlFor='email'>E-mail</Label>
          <Input
            id='email'
            type='email'
            name='email'
            error={emailErrors.hasErrors}
          />
          <ErrorMessages fieldErrors={emailErrors} />
        </div>
        <div>
          <Label htmlFor='username'>Usuário</Label>
          <div className='relative flex items-center'>
            <Input
              id='username'
              name='username'
              value={inputValue}
              onChange={handleChange}
              error={usernameErrors.hasErrors}
            />
          </div>
          <ErrorMessages fieldErrors={usernameErrors} />
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <Label htmlFor='password'>Senha</Label>
          </div>
          <div className='relative flex items-center'>
            <button
              className='absolute right-0 top-4 focus:outline-none'
              type='button'
            >
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
          </div>
          <ErrorMessages fieldErrors={passwordErrors} />
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <Label htmlFor='confirmpassword'>Confirme a senha</Label>
          </div>
          <div className='relative flex items-center'>
            <button
              className='absolute right-0 top-4 focus:outline-none'
              type='button'
            >
              <Icon
                name='eye'
                width={20}
                height={20}
                className='mx-4 size-6 text-gray-400 transition-colors duration-300 hover:text-gray-500'
              />
            </button>
            <Input
              id='confirmpassword'
              name='confirmpassword'
              type='password'
              className='block'
              error={confirmpasswordErrors.hasErrors}
            />
          </div>
          <ErrorMessages fieldErrors={confirmpasswordErrors} />
        </div>
      </div>
      <div className='flex items-center justify-start gap-x-2 py-10'>
        <p className='text-gray-700'>
          <span className='shrink-0'>
            O usuário deve conter apenas letras minúsculas, com no mínimo 3 e no
            máximo 10 caracteres, sem caracteres especiais ou espaços em branco.
          </span>
        </p>
      </div>
      <div className='flex w-full items-center justify-end'>
        <Submit text='Cadastrar novo usuário' color='green' />
      </div>
    </form>
  );
};

export default FormCreateUser;
