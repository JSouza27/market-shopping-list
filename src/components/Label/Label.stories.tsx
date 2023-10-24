import { Meta, StoryObj } from '@storybook/react';
import Label, { LabelProps } from '.';
import Input from '../Input';

export default {
  title: 'Label',
  component: Label
} as Meta;

export const Default: StoryObj<LabelProps> = {
  args: {
    htmlFor: 'Item',
    label: 'Item'
  },
  render: (args) => (
    <Label {...args}>
      <Input id={args.htmlFor} />
    </Label>
  )
};
