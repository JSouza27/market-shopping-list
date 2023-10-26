import { Meta, StoryObj } from '@storybook/react';
import Label from '../Label';
import Input, { InputProps } from '.';
import { FormProvider, useForm } from 'react-hook-form';

export default {
  title: 'Input',
  component: Input
} as Meta;

export const Default: StoryObj<InputProps> = {
  args: {
    id: 'story',
    name: 'item'
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    }
  ],
  render: (args) => (
    <Label htmlFor={args.id}>
      <span>Item</span>
      <Input {...args} />
    </Label>
  )
};
