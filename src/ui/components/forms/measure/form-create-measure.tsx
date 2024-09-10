'use client';

import Label from '../../label';
import ErrorMessages from '@/utils/error-messages';
import Submit from '../../submit';
import Input from '../../input';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormProps } from '@/types/form-types';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import findErrors from '@/utils/find-errors';

const FormCreateMeasure: React.FC<FormProps> = ({ action }) => {
  const [inputValue, setInputValue] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const regex = /^[0-9]{0,3}$/;

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
      toast.success('Medida cadastrada com sucesso!');
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
          <Label htmlFor='description'>Medida</Label>
          <Input
            id='description'
            name='description'
            error={false}
            value={inputValue}
            type='number'
            onChange={(e) => handleChange(e)}
          />
          <ErrorMessages fieldErrors={descriptionErrors} />
        </div>
      </div>
      <div className='flex w-full items-center justify-end pt-10'>
        <Submit text='Cadastrar nova medida' color='green' />
      </div>
    </form>
  );
};

export default FormCreateMeasure;
