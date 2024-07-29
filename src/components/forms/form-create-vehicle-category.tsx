'use client';

import Label from '../label';
import ErrorMessages from '@/utils/error-messages';
import Submit from '../submit';
import Input from '../input';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormProps } from '@/types/form-types';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import findErrors from '@/utils/find-errors';

const FormCreateVehicleCategory: React.FC<FormProps> = ({ action }) => {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const [state, formAction] = useFormState(action, {
    success: false,
    errors: [],
  });

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && !hasSubmitted) {
      ref.current?.reset();
      toast.success('Categoria cadastrada com sucesso!');
      setHasSubmitted(true);
    }
  }, [state.success, hasSubmitted]);

  const descriptionErrors = findErrors('description', state.errors);

  return (
    <form
      action={async (event) => {
        setHasSubmitted(false);
        await formAction(event);
      }}
      ref={ref}
    >
      <div className='w-full'>
        <div>
          <Label htmlFor='description'>Categoria</Label>
          <Input
            id='description'
            name='description'
            error={false}
            type='text'
            maxLength={20}
          />
          <ErrorMessages fieldErrors={descriptionErrors} />
        </div>
      </div>
      <div className='flex w-full items-center justify-end pt-10'>
        <Submit text='Cadastrar nova categoria' color='green' />
      </div>
    </form>
  );
};

export default FormCreateVehicleCategory;
