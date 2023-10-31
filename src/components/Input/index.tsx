import { InputHTMLAttributes } from 'react';

import InputMoney from './InputMoney';
import InputText from './InputText';

export type InputProps = {
  variant?: 'text' | 'money';
  handleTotal?: (value: number) => Promise<void>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  variant = 'text',
  handleTotal,
  ...props
}: InputProps) {
  return variant === 'text' ? (
    <InputText {...props} />
  ) : (
    <InputMoney handleTotal={handleTotal!} {...props} />
  );
}
