import authenticate from '@/actions/auth/authenticate';
import FormLogin from '@/components/forms/form-login';

export default function Home() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='m-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md'>
        <div className='flex flex-col gap-y-3'>
          <h3 className='mt-3 text-center text-xl font-medium text-gray-600'>
            Bem vindo de volta
            {process.env.SECRETKEY as string}
          </h3>

          <p className='mt-1 text-center text-gray-500'>Faça login</p>
        </div>

        <FormLogin action={authenticate} />
      </div>
    </div>
  );
}
