import { buttonColors } from '@/components/button';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color: keyof typeof buttonColors;
  type: 'submit' | 'reset' | 'button' | undefined;
}

export default ButtonInterface;
