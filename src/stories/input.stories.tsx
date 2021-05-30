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


export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
  value: 'it-incubator'
};


