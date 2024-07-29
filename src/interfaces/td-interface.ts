import { ReactNode } from 'react';

interface TdInterface {
  children: ReactNode | string | number | boolean | Date;
  className?: string;
}

export default TdInterface;
