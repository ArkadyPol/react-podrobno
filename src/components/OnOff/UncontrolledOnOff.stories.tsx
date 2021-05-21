import {Story, Meta} from '@storybook/react';
import UncontrolledOnOff, {PropsType} from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
} as Meta;

const Template: Story<PropsType> = (args) => <UncontrolledOnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
  defaultOn: true
};
export const OffMode = Template.bind({});
OffMode.args = {
  defaultOn: false
};



