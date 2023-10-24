import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={id}
      className="border w-full border-black/20 rounded-md p-3 text-sm text-dark focus:border-purple_light focus:outline-purple_light"
      {...register(props.name!)}
      {...props}
    />
  );
}
