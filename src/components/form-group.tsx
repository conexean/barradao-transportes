import FormGroupInterface from '@/interfaces/form-group-interface';

const FormGroup: React.FC<FormGroupInterface> = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default FormGroup;
