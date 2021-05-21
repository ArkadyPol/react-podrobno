import {Story, Meta} from '@storybook/react';
import UncontrolledRating from './UncontrolledRating';

export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating
} as Meta;

const Template: Story = (args) => <UncontrolledRating {...args} />;

export const UncontrolledRatingExample = Template.bind({});
