import { Meta, StoryObj } from '@storybook/react';
import Label, { LabelProps } from '.';

export default {
  title: 'Label',
  component: Label
} as Meta;

export const Default: StoryObj<LabelProps> = {
  args: {
    htmlFor: 'Item'
  },
  render: (args) => (
    <Label {...args}>
      <span>Item</span>
    </Label>
  )
};
