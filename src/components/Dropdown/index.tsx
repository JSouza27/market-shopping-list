import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

export default function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === ' ') {
      setIsOpen(false);
    }
  };

  const dropdownModiffiers = {
    close: 'opacity-0 pointer-events-none invisible',
    open: 'opacity-1 pointer-events-auto visible '
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div id="select">
      <div id="category-select" className="relative peer z-50">
        <input
          type="checkbox"
          id="option-view-button"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
          className="peer absolute inset-0 cursor-pointer appearance-none"
        />

        <div
          id="select-button"
          className={`
          .test
          flex items-center justify-between gap-2 p-3 border rounded-md border-black/20
          peer-checked:border-purple_light
          peer-checked:outline-purple_light
          peer-checked:[&>:last-child]:text-purple
          peer-checked:[&>:last-child]:origin-center
          peer-checked:[&>:last-child]:rotate-180
          `}
        >
          <div
            id="select-value"
            className="text-sm tracking-wide text-grey_darker"
          >
            {title}
          </div>
          <div id="chevron" className="text-black/20">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <div
        className={`rounded-md mt-1 bg-white_bis shadow-3xl z-50 hidden peer-[:has(#option-view-button:checked)]:block ${
          isOpen ? dropdownModiffiers.open : dropdownModiffiers.close
        }`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>

      <div
        className={`fixed z-30 top-0 bottom-0 left-0 right-0  ${
          isOpen ? dropdownModiffiers.open : dropdownModiffiers.close
        }`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
