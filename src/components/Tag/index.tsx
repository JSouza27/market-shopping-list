import React from 'react';

export type TagType = {
  children: string | React.ReactNode;
  icon?: React.ReactNode;
  color: 'pink' | 'orange' | 'yellow' | 'green' | 'blue';
};

export default function Tag({ children, icon, color }: TagType) {
  const colorVariants = {
    pink: 'text-pink bg-pink_lighter',
    orange: 'text-orange bg-orange_lighter',
    yellow: 'text-yellow bg-yellow_lighter',
    green: 'text-green bg-green_lighter',
    blue: 'text-blue bg-blue_lighter'
  };

  return (
    <div
      className={`rounded-[62.4375rem] flex justify-center items-center gap-2 px-4 py-2 w-fit ${colorVariants[color]}`}
    >
      {icon && icon}
      <span className={`font-semibold leading-3 text-xs`}>{children}</span>
    </div>
  );
}
