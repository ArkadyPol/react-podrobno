import {Story, Meta} from '@storybook/react';
import UncontrolledOnOff, {PropsType} from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
} as Meta;

const Template: Story<PropsType> = (args) => <UncontrolledOnOff {...args} />;

export const UncontrolledOnOffExample = Template.bind({});



