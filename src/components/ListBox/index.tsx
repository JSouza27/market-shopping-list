/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Listbox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

type ListBoxProps = {
  customClass?: string;
  selectedContent: any;
  contents: any[];
  handleSetSelectet: (value: any) => void;
};

export default function ListBox({
  handleSetSelectet,
  selectedContent,
  contents,
  customClass
}: ListBoxProps) {
  const buttonModifiers = {
    open: 'text-purple_light border-purple_light outline-purple_light',
    close: 'text-black/20 border-black/20 outline-black/20'
  };

  return (
    <Listbox value={selectedContent} onChange={handleSetSelectet}>
      <div className="relative">
        <Listbox.Button className="w-full">
          {({ open }) => (
            <button
              className={`flex gap-2 items-center justify-between w-full text-sm border rounded-md p-3 relative
                ${open ? buttonModifiers.open : buttonModifiers.close}
                ${customClass}
                `}
            >
              <span className="grow min-w-[1.75rem]">
                {selectedContent?.name || 'Selecione'}
              </span>
              <div>
                <ChevronDown
                  className={`${open && 'rotate-180 text-purple_light'}`}
                  size={16}
                />
              </div>
            </button>
          )}
        </Listbox.Button>
        <Listbox.Options className="bg-white_bis shadow-3xl absolute rounded-md mt-1 p-2 z-50 w-full">
          {contents.map((content) => (
            <Listbox.Option
              key={content.id}
              value={content}
              className="flex items-center self-stretch gap-2 p-3 hover:bg-grey_lighter/25 hover:rounded-md"
            >
              {!!content.icon && content.icon}
              <span className="grow text-dark text-sm leading-4 min-w-[1.75rem]">
                {content.name}
              </span>
              {content.id === selectedContent?.id && (
                <Check
                  size={12}
                  className="text-purple_light self-end"
                  aria-hidden="true"
                />
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
