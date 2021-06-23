import {Story, Meta} from '@storybook/react';
import Select, {SelectPropsType} from './Select';
import {useState} from 'react';

export default {
  title: 'Select',
  component: Select,
  args: {
    items: [
      {value: 1, title: 'Minsk'},
      {value: 2, title: 'Moscow'},
      {value: 3, title: 'Kiev'}
    ]
  }
} as Meta;

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const Select1 = Template.bind({});
Select1.args = {
  value: 1
};

export const Select2 = Template.bind({});
Select2.args = {
  value: 2
};


export const ControlledSelect: Story<SelectPropsType> = (args) => {
  const [parentValue, setParentValue] = useState<any>(1);
  const onChange = (value: any) => {
    setParentValue(value)
  }
  return <Select {...args} value={parentValue} onChange={onChange}/>
}