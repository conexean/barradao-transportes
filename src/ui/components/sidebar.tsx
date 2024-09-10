'use client';

import { ActiveContext } from '@/context/active-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useContext, useState } from 'react';
import CheckActiveRoute from '@/utils/check-active-route';
import {
  MdAddRoad,
  MdGroup,
  MdHandyman,
  MdHome,
  MdMiscellaneousServices,
  MdPallet,
  MdOutlineCarCrash,
  MdOutlineTireRepair,
  MdLocalShipping,
  MdCategory,
  MdStraighten,
  MdStore,
} from 'react-icons/md';

interface SidebarInterface {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarInterface> = ({ children }) => {
  const pathname = usePathname();

  const { active } = useContext(ActiveContext);

  return (
    <aside
      className={`fixed inset-y-0 left-0 h-screen w-full flex-col overflow-y-auto border-r bg-white px-5 pb-8 pt-4 transition-all duration-300 ease-in-out rtl:border-l rtl:border-r-0 ${active ? 'translate-x-0 md:w-[57px]' : '-translate-x-full md:w-[250px] md:translate-x-0'} z-50`}
    >
      <div className='flex flex-1 flex-col justify-between'>
        <nav className='-mx-3 space-y-6'>
          {children}
          <div className='space-y-2'>
            <div className='space-y-2'>
              <label
                className={`${active ? 'hidden' : 'block'} px-3 pb-2 pt-3 text-xs uppercase text-gray-500`}
              >
                Links comumns
              </label>
              <Link
                href={'/'}
                className={`${CheckActiveRoute({ pathname, link: '/' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdHome size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Passo a passo
                </span>
              </Link>

              <Link
                href={'/usuarios'}
                className={`${CheckActiveRoute({ pathname, link: '/usuarios' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdGroup size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Usuários
                </span>
              </Link>

              <Link
                href={'/configuracoes'}
                className={`${CheckActiveRoute({ pathname, link: '/configuracoes' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdMiscellaneousServices size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Configurações
                </span>
              </Link>
            </div>

            <div className='space-y-2'>
              <label
                className={`${active ? 'hidden' : 'block'} px-3 pb-2 pt-3 text-xs uppercase text-gray-500`}
              >
                Pneus
              </label>

              <Link
                href={'/pneus'}
                className={`${CheckActiveRoute({ pathname, link: '/pneus' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdOutlineTireRepair size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Pneus
                </span>
              </Link>

              <Link
                href={'/pneus/medidas'}
                className={`${CheckActiveRoute({ pathname, link: '/pneus/medidas' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdStraighten size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Medidas
                </span>
              </Link>
            </div>

            <div className='space-y-2'>
              <label
                className={`${active ? 'hidden' : 'block'} px-3 pb-2 pt-3 text-xs uppercase text-gray-500`}
              >
                Veículos
              </label>

              <Link
                href={'/veiculos'}
                className={`${CheckActiveRoute({ pathname, link: '/veiculos' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdLocalShipping size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Veículos
                </span>
              </Link>

              <Link
                href={'/veiculos/categorias'}
                className={`${CheckActiveRoute({ pathname, link: '/categorias' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdCategory size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Categorias
                </span>
              </Link>

              <Link
                href={'/veiculos/pecas'}
                className={`${CheckActiveRoute({ pathname, link: '/pecas' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdPallet size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Peças
                </span>
              </Link>

              <Link
                href={'/veiculos/servicos'}
                className={`${CheckActiveRoute({ pathname, link: '/veiculos/servicos' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdHandyman size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Serviços
                </span>
              </Link>

              <Link
                href={'/veiculos/manutencoes'}
                className={`${CheckActiveRoute({ pathname, link: '/veiculos/manutencoes' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdOutlineCarCrash size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Manutenção
                </span>
              </Link>
            </div>

            <div className='space-y-2'>
              <label
                className={`${active ? 'hidden' : 'block'} px-3 pb-2 pt-3 text-xs uppercase text-gray-500`}
              >
                Administrativo
              </label>

              <Link
                href={'/fornecedores'}
                className={`${CheckActiveRoute({ pathname, link: '/fornecedores' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdStore size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Fornecedores
                </span>
              </Link>

              <Link
                href={'/viagens'}
                className={`${CheckActiveRoute({ pathname, link: '/viagens' }) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-700'} flex items-center rounded px-[9px] py-2 transition-colors duration-300`}
              >
                <MdAddRoad size={22} className='me-2' />
                <span className='mx-2 whitespace-nowrap text-sm font-medium'>
                  Viagens
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
