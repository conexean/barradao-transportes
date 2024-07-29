import Icon from './icon';
import { getSession } from '@/lib/auth';

const ShowUserName: React.FC = async () => {
  const session = await getSession();
  return (
    <div className='flex items-center justify-start overflow-x-hidden whitespace-nowrap'>
      <Icon
        name='userCircle'
        width={42}
        height={42}
        className='me-2 min-h-[42px] min-w-[42px] text-gray-500'
      />
      {session?.auth.name}
    </div>
  );
};

export default ShowUserName;
