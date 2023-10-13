import { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';
import { Apple, Beef, Carrot, Check, Milk, Sandwich } from 'lucide-react';

export default {
  title: 'Dropdown ',
  component: Dropdown
} as Meta;

const categories = [
  {
    icon: <Sandwich className="text-yellow_dark" size={18} />,
    label: 'Padaria',
    value: 'bukery'
  },
  {
    icon: <Carrot className="text-green_dark" size={18} />,
    label: 'Legume',
    value: 'vegetable'
  },
  {
    icon: <Beef className="text-pink_dark" size={18} />,
    label: 'Carne',
    value: 'meat'
  },
  {
    icon: <Apple className="text-orange_dark" size={18} />,
    label: 'Fruta',
    value: 'fruit'
  },
  {
    icon: <Milk className="text-blue_dark" size={18} />,
    label: 'Bebida',
    value: 'drink'
  }
];

export const Default: StoryObj<DropdownProps> = {
  args: {
    title: 'Selecione uma categoria',
    children: categories.map(({ icon, label, value }, i) => (
      <li
        key={`${label}-${i}`}
        className="option z-50 flex relative items-center self-stretch gap-2 p-3 hover:bg-grey_lighter/25 [&>input:checked]:bg-grey_lighter/25"
      >
        <input
          type="radio"
          className="peer/option absolute inset-0 appearance-none cursor-default"
          name="category"
          value={value}
          aria-label={label}
        />
        {icon && icon}
        <span className="grow text-dark text-sm leading-4">{label}</span>
        <Check
          size={12}
          className="text-purple_light hidden peer-checked/option:block"
        />
      </li>
    ))
  }
};
