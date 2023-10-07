import React from 'react';
import { MoreVertical } from 'lucide-react';
import Checkbox from '../Checkbox';
import Tag from '../Tag';

export type ItemType = {
  label: string;
  quantity: number;
  category: {
    name: string;
    color: 'pink' | 'orange' | 'yellow' | 'green' | 'blue';
    icon: React.ReactNode;
  };
};

export default function Item({ label, quantity, category }: ItemType) {
  return (
    <div className="border border-black/20 bg-white_bis rounded-lg flex p-4 items-center justify-between shrink basis-[39rem]">
      <div className="flex gap-4 items-center">
        <Checkbox />
        <div className="flex flex-col">
          <span className="text-grey_dark text-sm font-bold leading-[1.1375rem]">
            {label}
          </span>
          <span className="text-grey_darker text-xs font-normal leading-[0.975rem]">
            {quantity > 1 ? `${quantity} unidades` : `${quantity} unidade`}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Tag color={category.color} icon={category.icon}>
          {category.name}
        </Tag>
        <button className="h-5 w-5 text-purple_light">
          <MoreVertical />
        </button>
      </div>
    </div>
  );
}
