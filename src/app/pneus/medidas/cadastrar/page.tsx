import Section from '@/components/section';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Breadcrumb from '@/components/breadcrumb';
import FormCreateMeasure from '@/components/forms/form-create-measure';
import createMeasure from '@/actions/measure/createMeasure';

const CadastrarUsuario: React.FC = () => {
  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Cadastrar medidas',
    links: [
      {
        label: 'Medidas de pneu',
        href: '/pneus/medidas',
        active: false,
      },
      {
        label: 'Cadastrar medidas',
        href: '/pneus/medidas/cadastrar',
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
          <FormCreateMeasure action={createMeasure} />
        </div>
      </Section>
    </>
  );
};

export default CadastrarUsuario;
