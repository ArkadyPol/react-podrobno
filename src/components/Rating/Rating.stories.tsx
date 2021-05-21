import {Story, Meta} from '@storybook/react';
import Rating, {RatingPropsType, RatingValueType} from './Rating';
import {useState} from 'react';

export default {
  title: 'Rating',
  component: Rating
} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
  value: 0,
};
export const Rating1 = Template.bind({});
Rating1.args = {
  value: 1,
};
export const Rating2 = Template.bind({});
Rating2.args = {
  value: 2,
};
export const Rating3 = Template.bind({});
Rating3.args = {
  value: 3,
};
export const Rating4 = Template.bind({});
Rating4.args = {
  value: 4,
};
export const Rating5 = Template.bind({});
Rating5.args = {
  value: 5,
};
export const RatingChanging: Story<RatingPropsType> = (args) => {
  const [rating, setRating] = useState<RatingValueType>(0);
  return <Rating {...args} value={rating} onClick={setRating}/>
}

