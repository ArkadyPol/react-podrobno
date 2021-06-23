import {Story, Meta} from '@storybook/react';
import Accordion, {AccordionPropsType} from './Accordion';
import {useState} from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {setCollapsed: {action: 'setCollapsed'}},
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
  collapsed: true,
  items: [],
  title: 'Menu'
};
export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
  collapsed: false,
  items: [
    {title: 'Dimych', value: 1},
    {title: 'Artem', value: 2},
    {title: 'Valera', value: 3}
  ],
  title: 'Users'
};
export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(false);
  return <Accordion {...args} collapsed={value} setCollapsed={setValue}
                    onClick={(value) => alert(`user with Id ${value} should be happy`)}/>
}
ModeChanging.args = {
  items: [
    {title: 'Dimych', value: 1},
    {title: 'Artem', value: 2},
    {title: 'Valera', value: 3}
  ],
  title: 'Users'
}

