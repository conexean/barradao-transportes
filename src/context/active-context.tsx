'use client';

import ActiveContextInterface from '@/interfaces/active-context-interface';
import { ReactNode, createContext, useState } from 'react';

export const ActiveContext = createContext({} as ActiveContextInterface);

export function AvtiveProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <ActiveContext.Provider value={{ active, toggle }}>
      {children}
    </ActiveContext.Provider>
  );
}
