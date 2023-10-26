import React, { ButtonHTMLAttributes } from 'react';

type ButtonType = {
  icon: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ icon, ...props }: ButtonType) {
  return (
    <button
      type="button"
      className="flex items-end justify-end p-2 rounded-full bg-purple cursor-pointer text-white hover:bg-primary_dark focus:outline-purple_light"
      {...props}
    >
      {icon}
    </button>
  );
}
