import deauthenticate from '@/actions/auth/deauthenticate';
import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Loading from '../loading';
import { redirect } from 'next/navigation';
import Icon from '../icon';

const FormLogout: React.FC = () => {
  const [state, formAction] = useFormState(deauthenticate, null);

  useEffect(() => {
    if (state) {
      redirect('/login');
    }
  }, [state]);

  return (
    <form action={formAction}>
      <SubmitFormLogout />
    </form>
  );
};

export default FormLogout;

const SubmitFormLogout: React.FC = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending && <Loading />}
      <button
        type='submit'
        className='flex items-center justify-center text-gray-500 hover:text-gray-600'
        aria-disabled={pending}
        disabled={pending}
      >
        <Icon name='logout' width={22} height={22} />
        Sair
      </button>
    </>
  );
};
