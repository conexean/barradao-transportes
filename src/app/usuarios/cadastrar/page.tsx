import Section from '@/components/section';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Breadcrumb from '@/components/breadcrumb';
import createUser from '@/actions/user/createUser';
import FormCreateUser from '@/components/forms/form-create-user';

const CadastrarUsuario: React.FC = () => {
  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Cadastrar usuários',
    links: [
      {
        label: 'Usuários',
        href: '/usuarios',
        active: false,
      },
      {
        label: 'Cadastrar usuários',
        href: '/usuarios/cadastrar',
        active: true,
      },
    ],
  };
  return (
    <>
      <Section>
        <Breadcrumb
          title={breadcrumbProps.title}
          links={breadcrumbProps.links}
        />
        <div>
          <FormCreateUser action={createUser} />
        </div>
      </Section>
    </>
  );
};

export default CadastrarUsuario;
