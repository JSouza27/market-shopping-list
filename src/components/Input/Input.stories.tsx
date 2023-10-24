import { Meta, StoryObj } from '@storybook/react';
import Label from '../Label';
import Input, { InputProps } from '.';

export default {
  title: 'Input',
  component: Input
} as Meta;

export const Default: StoryObj<InputProps> = {
  args: {
    id: 'story'
  },
  render: (args) => (
    <Label label="Item" htmlFor={args.id}>
      <Input {...args} />
    </Label>
  )
};
