import React from 'react';

type GroupType = {
  checked: boolean;
  children: React.ReactNode;
};

export default function Group({ checked, children }: GroupType) {
  const containerModiffiers = {
    checked: 'bg-grey_lighter/25',
    unchecked: 'bg-white_bis'
  };

  return (
    <div
      className={`border border-black/20 rounded-lg flex p-4 items-center justify-between shrink basis-[39rem] cursor-pointer z-30 ${
        checked ? containerModiffiers.checked : containerModiffiers.unchecked
      }`}
    >
      {children}
    </div>
  );
}
