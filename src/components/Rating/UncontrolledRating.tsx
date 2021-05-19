import {useState} from 'react';

type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

function UncontrolledRating() {
  const [value, setValue] = useState<RatingType>(0);

  console.log('UncontrolledRating rendering');
  return (
      <div>
        <Star selected={value > 0} setValue={() => setValue(1)}/>
        <Star selected={value > 1} setValue={() => setValue(2)}/>
        <Star selected={value > 2} setValue={() => setValue(3)}/>
        <Star selected={value > 3} setValue={() => setValue(4)}/>
        <Star selected={value > 4} setValue={() => setValue(5)}/>
      </div>
  );
}

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

function Star(props: StarPropsType) {
  console.log('Star rendering');
  return <span onClick={() => props.setValue()}>
    {props.selected ? <b>star</b> : 'star'}{' '}
  </span>
}

export default UncontrolledRating;