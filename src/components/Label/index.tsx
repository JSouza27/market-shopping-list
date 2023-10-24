import { LabelHTMLAttributes } from 'react';

export type LabelProps = {
  required?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  children,
  htmlFor,
  required = false,
  ...props
}: LabelProps) {
  const labelModifiers = {
    required: "after:content-['*'] after:text-red_dark"
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-normal leading-3 tracking-wide text-dark ${
        required && labelModifiers.required
      }`}
      {...props}
    >
      {children && children}
    </label>
  );
}
