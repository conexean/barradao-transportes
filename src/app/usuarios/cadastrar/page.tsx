import FormCreateUser from '@/ui/components/forms/user/form-create-user';
import PageLayout from '@/ui/layouts/page-layout';

const CadastrarUsuarioPage: React.FC = () => {
  return (
    <PageLayout title='Cadastrar usuário' showRegisterButton={false}>
      <FormCreateUser />
    </PageLayout>
  );
};

export default CadastrarUsuarioPage;
