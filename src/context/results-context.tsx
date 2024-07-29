'use client';

import ResultsContextInterface from '@/interfaces/results-context-interface';
import { ReactNode, createContext, useState } from 'react';

export const ResultsContext = createContext({} as ResultsContextInterface);

export function ResultsProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  const results = [10, 25, 50, 100];

  const [resultsPerPage, setPerPage] = useState<number>(10);

  function toggle() {
    setActive(!active);
  }

  const setResultsPerPage = (perPage: number) => {
    setPerPage(perPage);
  };

  return (
    <ResultsContext.Provider
      value={{ active, toggle, results, resultsPerPage, setResultsPerPage }}
    >
      {children}
    </ResultsContext.Provider>
  );
}
