import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum dolor sit amet consectetur.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta officiis modi necessitatibus quae sed reiciendis nisi quod porro quia dicta quo nesciunt hic expedita eum labore exercitationem, delectus alias mollitia quas unde dolorum. Similique ratione quia, et corrupti aperiam sed, minima eos neque distinctio enim fugit veniam laudantium eaque?',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Lorem ipsum dolor sit amet consectetur.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta officiis modi necessitatibus quae sed reiciendis nisi quod porro quia dicta quo nesciunt hic expedita eum labore exercitationem, delectus alias mollitia quas unde dolorum. Similique ratione quia, et corrupti aperiam sed, minima eos neque distinctio enim fugit veniam laudantium eaque?',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta officiis modi necessitatibus quae sed reiciendis nisi quod porro quia dicta quo nesciunt hic expedita eum labore exercitationem, delectus alias mollitia quas unde dolorum. Similique ratione quia, et corrupti aperiam sed, minima eos neque distinctio enim fugit veniam laudantium eaque?',
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  title: 'Lorem ipsum dolor sit amet consectetur.',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  title: 'Lorem ipsum dolor sit amet consectetur.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta officiis modi necessitatibus quae sed reiciendis nisi quod porro quia dicta quo nesciunt hic expedita eum labore exercitationem, delectus alias mollitia quas unde dolorum. Similique ratione quia, et corrupti aperiam sed, minima eos neque distinctio enim fugit veniam laudantium eaque?',
  theme: TextTheme.ERROR,
};
