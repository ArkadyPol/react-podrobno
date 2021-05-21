import {Story, Meta} from '@storybook/react';
import OnOff, {PropsType} from './OnOff';
import {useState} from 'react';

export default {
  title: 'OnOff',
  component: OnOff,
  argTypes: {setOn: {action: 'setOn'}}
} as Meta;

const Template: Story<PropsType> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
  on: true
};
export const OffMode = Template.bind({});
OffMode.args = {
  on: false
};
export const ModeChanging: Story<PropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff {...args} on={value} setOn={setValue}/>
}

