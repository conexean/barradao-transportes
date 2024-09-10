import TrInterface from '@/application/interfaces/tr-interface';

const Tr: React.FC<TrInterface> = ({ children, className, onClick }) => {
  return (
    <tr className={`${className}`} onClick={onClick}>
      {children}
    </tr>
  );
};

export default Tr;
