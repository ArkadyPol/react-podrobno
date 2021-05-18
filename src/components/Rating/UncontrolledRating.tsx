import {useState} from 'react';

type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

function UncontrolledRating() {
  const [value, setValue] = useState<RatingType>(0);

  console.log('UncontrolledRating rendering');
  return (
      <div>
        <Star selected={value > 0} onClickStar={() => setValue(1)}/>
        <Star selected={value > 1} onClickStar={() => setValue(2)}/>
        <Star selected={value > 2} onClickStar={() => setValue(3)}/>
        <Star selected={value > 3} onClickStar={() => setValue(4)}/>
        <Star selected={value > 4} onClickStar={() => setValue(5)}/>
      </div>
  );
}

type StarPropsType = {
  selected: boolean
  onClickStar: () => void
}

function Star(props: StarPropsType) {
  console.log('Star rendering');
  return props.selected ? <span onClick={() => props.onClickStar()}><b>star</b> </span> :
      <span onClick={() => props.onClickStar()}>star </span>;
}

export default UncontrolledRating;