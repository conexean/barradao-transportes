import LabelInterface from '@/interfaces/label-interface';

const Label: React.FC<LabelInterface> = ({ className, children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm text-gray-800 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
