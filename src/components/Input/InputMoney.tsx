import React, { InputHTMLAttributes, useRef } from 'react';

export type InputProps = {
  handleTotal: (value: number) => Promise<void>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputMoney({ id, handleTotal, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/, '.');
    e.currentTarget.value = value;
  };

  return (
    <input
      id={id}
      className="border w-24 border-black/20 rounded-md p-3 text-sm text-center text-dark focus:border-purple_light focus:outline-purple_light"
      type="text"
      onKeyUp={handleKeyUp}
      onBlur={() => {
        let value = inputRef.current?.value;

        value = value?.replace('.', '');
        value = value?.replace(',', '.');
        handleTotal(Number(value));
      }}
      ref={inputRef}
      {...props}
    />
  );
}
