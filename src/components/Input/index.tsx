import { InputHTMLAttributes } from 'react';

type InputType = {
  label: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, name, ...props }: InputType) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs font-normal leading-3 tracking-wide text-dark"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        className="border border-black/20 rounded-md p-3 text-sm text-dark focus:border-purple_light focus:outline-purple_light"
        {...props}
      />
    </div>
  );
}
