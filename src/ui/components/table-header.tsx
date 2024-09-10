import TableHeaderInterface from '@/application/interfaces/table-header-interface';

const TableHeader: React.FC<TableHeaderInterface> = ({ children }) => {
  return <thead className='bg-gray-50'>{children}</thead>;
};

export default TableHeader;
