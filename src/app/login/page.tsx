import authenticate from '@/actions/auth/authenticate';
import FormLogin from '@/ui/components/auth/form-login';

export default function LoginPage() {
  return (
    <section className='bg-white'>
      <div className='flex min-h-screen justify-center'>
        <div className='hidden bg-[url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")] bg-cover lg:block lg:w-2/5'></div>

        <div className='mx-auto flex w-full max-w-3xl items-center p-8 lg:w-3/5 lg:px-12'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold capitalize tracking-wider text-gray-800'>
              Barradão Transportes
            </h1>

            <p className='mt-4 text-lg text-gray-500'>Bem vindo de volta!</p>
            <FormLogin action={authenticate} />
          </div>
        </div>
      </div>
    </section>
  );
}
