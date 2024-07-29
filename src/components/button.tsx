import ButtonInterface from '@/interfaces/button-interface';

export const buttonColors = {
  blue: 'bg-blue-600 hover:bg-blue-500 focus:ring-blue-500/50 text-white',
  green: 'bg-green-600 hover:bg-green-500 focus:ring-green-500/50 text-white',
  transparent:
    'text-gray-600 hover:text-gray-600 focus:text-gray-500 focus:outline-none',
};

const Button: React.FC<ButtonInterface> = ({
  children,
  className,
  color,
  ...rest
}) => {
  const buttonColor = buttonColors[color];

  return (
    <button
      className={`rounded-lg px-6 py-2.5 text-sm font-medium capitalize tracking-wide transition-colors duration-300 focus:outline-none ${buttonColor} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
