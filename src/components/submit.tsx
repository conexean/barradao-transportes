import { useFormStatus } from 'react-dom';
import Button, { buttonColors } from './button';
import Loading from './loading';

interface SubmitInterface {
  text: string;
  className?: string;
  color: keyof typeof buttonColors;
}

const Submit: React.FC<SubmitInterface> = ({ text, className, color }) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && <Loading />}
      <Button
        type='submit'
        color={color}
        className={className}
        aria-disabled={pending}
        disabled={pending}
      >
        {text}
      </Button>
    </>
  );
};

export default Submit;
