import { Meta, StoryObj } from '@storybook/react';
import { Sandwich } from 'lucide-react';

import Tag, { TagType } from '.';

export default {
  title: 'Tag',
  component: Tag
} as Meta;

export const Default: StoryObj<TagType> = {
  args: {
    color: 'yellow'
  },
  render: (args) => <Tag {...args}>padaria</Tag>
};

export const WithIcon: StoryObj<TagType> = {
  args: {
    icon: <Sandwich size={16} />,
    color: 'yellow'
  },
  render: (args) => <Tag {...args}>padaria</Tag>
};
