import { InputHTMLAttributes } from 'react';

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: boolean;
}

export default InputInterface;
