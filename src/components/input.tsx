/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import InputInterface from '@/interfaces/input-interface';

const Input: React.FC<InputInterface> = ({ className, id, error, ...rest }) => {
  const inputClassName = `mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${className} ${error ? 'border-red-500' : ''}`;

  return <input className={inputClassName} id={id} {...rest} />;
};

export default Input;
