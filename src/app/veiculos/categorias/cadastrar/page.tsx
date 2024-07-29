import Section from '@/components/section';
import BreadcrumbInterface from '@/interfaces/breadcrumb-interface';
import Breadcrumb from '@/components/breadcrumb';
import FormCreateVehicleCategory from '@/components/forms/form-create-vehicle-category';
import createVehicleCategory from '@/actions/vehicles-category/createVehiclesCategory';

const CadastrarCategoria: React.FC = () => {
  const breadcrumbProps: BreadcrumbInterface = {
    title: 'Cadastrar categoria',
    links: [
      {
        label: 'Categorias de veículos',
        href: '/veiculos/categorias',
        active: false,
      },
      {
        label: 'Cadastrar categoria',
        href: '/veiculos/categorias/cadastrar',
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
          <FormCreateVehicleCategory action={createVehicleCategory} />
        </div>
      </Section>
    </>
  );
};

export default CadastrarCategoria;
