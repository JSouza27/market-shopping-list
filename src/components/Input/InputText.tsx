import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function InputText({ ...props }: InputProps) {
  const methods = useFormContext();

  return (
    <input
      className="border w-full border-black/20 rounded-md p-3 text-sm text-dark focus:border-purple_light focus:outline-purple_light"
      {...methods?.register(props.name!)}
      {...props}
    />
  );
}
