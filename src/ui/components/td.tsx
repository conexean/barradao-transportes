import TdInterface from '@/application/interfaces/td-interface';

const Td: React.FC<TdInterface> = ({ children, className }) => {
  const formattedChildren =
    children instanceof Date ? children.toLocaleString() : children;

  return (
    <td
      className={`whitespace-nowrap p-4 text-sm font-medium text-gray-700 ${className}`}
    >
      <div className='inline-flex items-center gap-x-3'>
        {formattedChildren}
      </div>
    </td>
  );
};

export default Td;
