'use client';

import { ActiveContext } from '@/context/active-context';
import MainInterface from '@/application/interfaces/main-interface';
import { useContext } from 'react';

const Main: React.FC<MainInterface> = ({ children }) => {
  const { active } = useContext(ActiveContext);

  return (
    <main
      className={`transition-all duration-300 ease-in-out ${active ? 'md:ms-[57px]' : 'md:ms-[250px]'}`}
    >
      {children}
    </main>
  );
};

export default Main;
