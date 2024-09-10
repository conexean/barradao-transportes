import React, { InputHTMLAttributes } from 'react';

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'> {
  name: string;
  id: string;
  label?: string;
  inputClass?: string;
  errors?: string;
}

const Input: React.FC<IInput> = ({
  name,
  id,
  value,
  onChange,
  inputClass,
  label,
  errors,
  ...rest
}) => {
  return (
    <div className='flex flex-col'>
      {label && (
        <label
          htmlFor={id}
          className={`mb-1 text-base ${errors ? 'text-red-500' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}
      <input
        type='text'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={`block w-full rounded border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40 ${inputClass || ''}`}
        {...rest}
      />
      <span className='mt-1 h-4 text-sm text-red-500'>
        {errors || '\u00A0'}
      </span>
    </div>
  );
};

export default Input;
