'use client';

import { useFormState } from 'react-dom';
import Input from '@/ui/components/input';
import { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createUser } from '@/interface/actions/user/create-user-action';
import { SubmitButton } from '../../submit';
import FlexibleSelect from '../../flexible-select';
import { useForm } from '@/application/hooks/use-form';
import { userValidations } from '@/application/validations/user/user-validation';

const permissionsOptions = [
  { value: 'tech', label: 'Tecnologia' },
  { value: 'sports', label: 'Esportes' },
  { value: 'music', label: 'Música' },
  { value: 'travel', label: 'Viagens' },
  { value: 'food', label: 'Gastronomia' },
];

const FormCreateUser: React.FC = () => {
  const { formData, errors, isSubmitting, handleChange, validateForm } =
    useForm({
      name: {
        initialValue: '',
        validations: userValidations.name,
      },
      lastName: {
        initialValue: '',
        validations: userValidations.lastName,
      },
      email: {
        initialValue: '',
        validations: userValidations.email,
      },
      password: {
        initialValue: '',
        validations: userValidations.password,
      },
      confirmPassword: {
        initialValue: '',
        validations: userValidations.confirmPassword,
      },
      permissions: {
        initialValue: '',
        validations: userValidations.permissions,
      },
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log('Form submitted:', formData);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 gap-x-5 gap-y-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        <Input
          id='name'
          name='name'
          label='Nome*'
          value={formData.name}
          onChange={handleChange}
          errors={errors.name}
        />
        <Input
          id='lastName'
          name='lastName'
          label='Sobrenome'
          value={formData.lastName}
          onChange={handleChange}
          errors={errors.lastName}
        />
        <Input
          id='email'
          name='email'
          label='E-mail *'
          type='email'
          value={formData.email}
          onChange={handleChange}
          errors={errors.email}
        />
        <Input
          id='password'
          name='password'
          label='Senha *'
          type='password'
          value={formData.password}
          onChange={handleChange}
          errors={errors.password}
        />
        <Input
          id='confirmPassword'
          name='confirmPassword'
          label='Confirmação de senha *'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
          errors={errors.confirmPassword}
        />

        <div className='col-span-1 lg:col-span-full'>
          <FlexibleSelect
            isMulti={true}
            name='permissions'
            id='permissions'
            label='Permissões *'
            options={permissionsOptions}
            value={formData.permissions}
            onChange={handleChange}
            errors={errors.permissions}
          />
          <span className='mt-1 text-sm text-gray-500'>
            Você pode selecionar várias permissões
          </span>
        </div>
      </div>
      <div className='mt-4 flex w-full items-center justify-end'>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default FormCreateUser;
