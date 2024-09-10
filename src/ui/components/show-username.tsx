import { getSession } from '@/lib/auth';
import { MdPerson } from 'react-icons/md';

const ShowUserName: React.FC = async () => {
  const session = await getSession();
  return (
    <div className='flex items-center justify-start overflow-x-hidden whitespace-nowrap'>
      <MdPerson
        size={43}
        className='me-2 rounded-full bg-gray-300 p-1 text-gray-500'
      />
      {session?.auth.name}
    </div>
  );
};

export default ShowUserName;
