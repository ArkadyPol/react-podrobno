import {Story, Meta} from '@storybook/react';
import Accordion, {AccordionPropsType} from './Accordion';
import {useState} from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {setCollapsed: {action: 'setCollapsed'}},
  args: {title: 'Menu'}
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
  collapsed: true
};
export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
  collapsed: false
};
export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(false);
  return <Accordion {...args} collapsed={value} setCollapsed={setValue}/>
}

