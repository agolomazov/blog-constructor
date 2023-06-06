import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
  args: {
    src: 'https://avatars.githubusercontent.com/u/8750718',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://avatars.githubusercontent.com/u/8750718',
  alt: 'agolomazov',
  title: 'agolomazov',
  size: 200,
};
