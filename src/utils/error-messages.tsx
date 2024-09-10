'use client';

import FieldErrors from '@/application/interfaces/field-erros-interface';
import React from 'react';

const ErrorMessages = ({ fieldErrors }: { fieldErrors: FieldErrors }) => {
  if (!fieldErrors.hasErrors) return null;

  const text = fieldErrors.errors.join(', ');

  return <span className='error'>{text}</span>;
};

export default ErrorMessages;
