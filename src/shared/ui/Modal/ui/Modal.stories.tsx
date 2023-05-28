import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus alias nam est iure minus cumque sit esse. Repellendus asperiores cupiditate labore aperiam, itaque sapiente laboriosam! Rerum quae earum aperiam. Qui ipsum tempora consequatur vitae sapiente aperiam, cum, ratione, labore at commodi veniam minus fuga totam rerum? Libero esse nobis, recusandae nam illum perferendis quia, dolorum, inventore tenetur autem dignissimos at! Porro, laboriosam voluptatibus esse at magni est ipsa quod voluptatem, eaque nostrum minima ut iure quam officia modi architecto? Esse provident minima modi dolore temporibus accusantium voluptates veniam. Quo veniam dolorum laboriosam accusamus quam possimus molestias magni nisi omnis.',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus alias nam est iure minus cumque sit esse. Repellendus asperiores cupiditate labore aperiam, itaque sapiente laboriosam! Rerum quae earum aperiam. Qui ipsum tempora consequatur vitae sapiente aperiam, cum, ratione, labore at commodi veniam minus fuga totam rerum? Libero esse nobis, recusandae nam illum perferendis quia, dolorum, inventore tenetur autem dignissimos at! Porro, laboriosam voluptatibus esse at magni est ipsa quod voluptatem, eaque nostrum minima ut iure quam officia modi architecto? Esse provident minima modi dolore temporibus accusantium voluptates veniam. Quo veniam dolorum laboriosam accusamus quam possimus molestias magni nisi omnis.',
  isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
