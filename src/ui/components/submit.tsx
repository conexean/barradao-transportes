import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50'
    >
      {isSubmitting ? 'Enviando...' : 'Cadastrar'}
    </button>
  );
};
