'use client';

import { useFormState } from 'react-dom';
import Label from '@/ui/components/label';
import Input from '@/ui/components/input';
import { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import Submit from '@/ui/components/submit';
import { updateUserSchemaFields } from '@/application/validations/user/update-user-validation';
import { updateUser } from '@/interface/actions/user/update-user-action';

interface FormUpdateUserProps {
  user: {
    id: number;
    name: string;
    lastname: string;
    email: string;
  } | null;
}

const initialState = {
  message: '',
  success: false,
  errors: [] as { field: string; message: string }[],
};

const FormUpdateUser: React.FC<FormUpdateUserProps> = ({ user }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(updateUser, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        formRef.current?.reset();
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {updateUserSchemaFields.map(({ key, label, type, className }) => (
          <div key={key} className={className}>
            {label && <Label htmlFor={key}>{label}</Label>}
            <Input
              id={key}
              name={key}
              type={type}
              defaultValue={
                user && ['id', 'name', 'lastname', 'email'].includes(key)
                  ? user[key as keyof typeof user]
                  : undefined
              }
            />
            {state.errors?.find((error) => error.field === key) && (
              <p className='mt-1 text-xs text-red-500'>
                {state.errors.find((error) => error.field === key)?.message}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className='mt-4 flex w-full items-center justify-end'>
        <Submit text='Update User' color='green' />
      </div>
    </form>
  );
};

export default FormUpdateUser;
