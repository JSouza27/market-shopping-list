import { Meta, StoryObj } from '@storybook/react';
import { Apple } from 'lucide-react';
import Item, { ItemType } from '.';

export default {
  title: 'Item',
  component: Item
} as Meta;

export const Default: StoryObj<ItemType> = {
  args: {
    label: 'Maçã',
    quantity: 6,
    category: {
      color: 'orange',
      icon: <Apple size={16} />,
      name: 'fruta'
    }
  }
};
