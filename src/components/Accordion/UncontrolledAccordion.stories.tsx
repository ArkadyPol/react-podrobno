import {Story, Meta} from '@storybook/react';
import UncontrolledAccordion, {UncontrolledAccordionPropsType} from './UncontrolledAccordion';

export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
  args: {title: 'Menu'}
} as Meta;

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;

export const UncontrolledAccordionExample = Template.bind({});


