import { Meta, StoryObj } from '@storybook/react';
import { Sandwich } from 'lucide-react';

import Tag, { TagType } from '.';

export default {
  title: 'Tag',
  component: Tag
} as Meta;

export const Default: StoryObj<TagType> = {
  args: {
    text: 'padaria',
    icon: <Sandwich size={16} />,
    color: 'yellow'
  }
};
