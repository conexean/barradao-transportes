import ThInterface from '@/application/interfaces/th-interface';

const Th: React.FC<ThInterface> = ({ children, className }) => {
  return (
    <th
      scope='col'
      className={`px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right ${className}`}
    >
      <div className='flex items-center gap-x-3'>
        <span>{children}</span>
      </div>
    </th>
  );
};

export default Th;
