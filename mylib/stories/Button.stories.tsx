import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  children: 'Connect Your Device',
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Connect Your Device',
  variant: 'secondary',
};
