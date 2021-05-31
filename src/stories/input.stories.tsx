import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';

export default {
  title: 'Example/input',
} as Meta;

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Template: Story<InputPropsType> = (args) =>
    <input {...args} />;

export const UncontrolledInput = Template.bind({});

export const TrackValueOfUncontrolledInput: Story<InputPropsType> = (args) => {
  const [value, setValue] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }
  return <><input {...args} onChange={onChange}/> - {value}</>


}
export const GetValueOfUncontrolledInputByButtonPress: Story<InputPropsType> = (args) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    const el = inputRef.current;
    if (el) setValue(el.value);
  }
  return <><input {...args} ref={inputRef}/>
    <button onClick={save}>save</button>
    {' '} - actual value: {value}</>
}
export const ControlledInput: Story<InputPropsType> = (args) => {
  const [parentValue, setParentValue] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return <input {...args} value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox: Story<InputPropsType> = (args) => {
  const [parentValue, setParentValue] = useState<boolean>(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  }
  return <input {...args} type="checkbox" checked={parentValue} onChange={onChange}/>

}

export const ControlledSelect: Story = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value="3">Kiev</option>
  </select>

}

export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
  value: 'it-incubator'
};


