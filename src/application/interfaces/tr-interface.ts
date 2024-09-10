import { ReactNode } from 'react';

interface TrInterface {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default TrInterface;
