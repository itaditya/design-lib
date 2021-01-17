import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <span>
      Signup
    </span>
  )
};
