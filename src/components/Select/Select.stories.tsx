import {Story, Meta} from '@storybook/react';
import Select, {SelectPropsType} from './Select';
import {useState} from 'react';

export default {
  title: 'Select',
  component: Select,
  args: {
    items: [
      {value: '1', title: 'Minsk'},
      {value: '2', title: 'Moscow'},
      {value: '3', title: 'Kiev'}
    ]
  }
} as Meta;

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const WithValue = Template.bind({});
WithValue.args = {
  value: '2'
};

export const WithoutValue = Template.bind({});

export const ControlledSelect: Story<SelectPropsType> = (args) => {
  const [value, setValue] = useState<any>('1');
  const onChange = (value: any) => {
    setValue(value)
  }
  return <Select {...args} value={value} onChange={onChange}/>
}