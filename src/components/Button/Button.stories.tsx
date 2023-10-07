import { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import Button from '.';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Default: StoryObj = {
  args: {
    icon: <Plus size={24} />
  }
};
