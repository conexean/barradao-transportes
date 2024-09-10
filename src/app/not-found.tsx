import Button from '@/ui/components/button';
import Container from '@/ui/components/container';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[180px] font-bold'>404</h1>
          <h1 className='text-[20px]'>
            Ops! A página que você procura não foi encontrada ou não existe.
            Retorne a página inicial ou clique no botão abaixo!
          </h1>
          <Link href={'/'}>
            <Button type='button' color='blue' className='mt-[35px]'>
              Ir para página inicial
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Custom404;
