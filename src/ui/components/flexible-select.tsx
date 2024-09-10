import React from 'react';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';

interface ISelectOption {
  value: string;
  label: string;
}

interface IFlexibleSelect {
  name: string;
  id: string;
  label?: string;
  options: ISelectOption[];
  value: string | string[];
  onChange: (e: { name: string; value: any }) => void;
  errors?: string;
  placeholder?: string;
  className?: string;
  isMulti: boolean;
}

const FlexibleSelect: React.FC<IFlexibleSelect> = ({
  name,
  id,
  options,
  value,
  onChange,
  label,
  errors,
  placeholder = 'Selecione...',
  className = '',
  isMulti,
}) => {
  const handleChange = (
    newValue: MultiValue<ISelectOption> | SingleValue<ISelectOption>,
  ) => {
    if (isMulti) {
      onChange({
        name,
        value: (newValue as MultiValue<ISelectOption>).map(
          (item) => item.value,
        ),
      });
    } else {
      onChange({
        name,
        value: (newValue as SingleValue<ISelectOption>)?.value || '',
      });
    }
  };

  const customStyles: StylesConfig<ISelectOption, typeof isMulti> = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '42px',
      borderColor: errors ? '#ef4444' : state.isFocused ? '#60a5fa' : '#e5e7eb',
      boxShadow: state.isFocused ? '0 0 0 1px #60a5fa' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#60a5fa' : '#d1d5db',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '2px 8px',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0px',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#e5e7eb',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#374151',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#6b7280',
      ':hover': {
        backgroundColor: '#d1d5db',
        color: '#1f2937',
      },
    }),
  };

  const getValue = () => {
    if (isMulti) {
      return options.filter((option) =>
        (value as string[]).includes(option.value),
      );
    }
    return options.find((option) => option.value === value);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`mb-1 text-base ${errors ? 'text-red-500' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}
      <Select
        isMulti={isMulti}
        name={name}
        id={id}
        instanceId={id}
        options={options}
        value={getValue()}
        onChange={handleChange}
        placeholder={placeholder}
        className='react-select-container'
        classNamePrefix='react-select'
        styles={customStyles}
      />
      <span className='mt-1 h-4 text-sm text-red-500'>
        {errors || '\u00A0'}
      </span>
    </div>
  );
};

export default FlexibleSelect;
