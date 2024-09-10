'use client';

import ModalContextInterface from '@/application/interfaces/modal-context-interface';
import { ReactNode, createContext, useState } from 'react';

export const ModalContext = createContext({} as ModalContextInterface);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <ModalContext.Provider value={{ active, toggle }}>
      {children}
    </ModalContext.Provider>
  );
}
