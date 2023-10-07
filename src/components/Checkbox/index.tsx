import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ ...props }: CheckboxProps) {
  return (
    <div className="relative flex cursor-pointer items-center rounded-full p-1">
      <input
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-primary_light hover:bg-primary_dark transition-all before:absolute before:top-2/4 before:left-2/4 before:block checked:border-success_dark checked:bg-success_dark checked:before:bg-success_dark checked:hover:bg-success hover:before:opacity-10"
        type="checkbox"
        {...props}
      />
      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}
