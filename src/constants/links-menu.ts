import MenuLinkInterface from '@/interfaces/menu-link';

const linksMenu: MenuLinkInterface[] = [
  {
    links: [{ href: '/', label: 'Passo a passo', icon: 'step' }],
  },
  {
    links: [{ href: '/usuarios', label: 'Usuários', icon: 'users' }],
  },
  {
    menu: 'Pneus',
    links: [
      { href: '/pneus/medidas', label: 'Medidas', icon: 'tireMeasure' },
      { href: '/pneus', label: 'Pneus', icon: 'tire' },
    ],
  },
  {
    menu: 'Veículos',
    links: [
      {
        href: '/veiculos/categorias',
        label: 'Categorias',
        icon: 'truckCategory',
      },
      { href: '/veiculos', label: 'Veículos', icon: 'truck' },
    ],
  },
];

export default linksMenu;
