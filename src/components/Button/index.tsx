import React, { ButtonHTMLAttributes } from 'react';

type ButtonType = {
  icon: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ icon, ...props }: ButtonType) {
  return (
    <button
      type="button"
      className="flex items-end justify-end p-1.5 rounded-full bg-purple cursor-pointer text-white hover:bg-primary_dark"
      {...props}
    >
      {icon}
    </button>
  );
}
