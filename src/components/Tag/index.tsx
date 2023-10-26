import React from 'react';
import { ColorType } from '../../common/types/category';

export type TagType = {
  children: string | React.ReactNode;
  icon?: React.ReactNode;
  color: ColorType;
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
      className={`rounded-[62.4375rem] flex justify-center items-center gap-2 px-2 py-2 w-fit ${colorVariants[color]} md:px-4`}
    >
      {icon && icon}
      <span className={`font-semibold leading-3 text-xs hidden md:block`}>
        {children}
      </span>
    </div>
  );
}
