type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
  console.log('Rating rendering');
  let boolArr: Array<boolean>;
  boolArr = new Array(5).fill(true, 0, props.value).fill(false, props.value);
  let stars = boolArr.map((value, idx) => <Star selected={value} key={idx}/>);
  return <div>{stars}</div>;
}

type StarPropsType =
    {
      selected: boolean
    }

function Star(props: StarPropsType) {
  console.log('Star rendering');
  return props.selected ? <span><b>star</b> </span> : <span>star </span>;
}

export default Rating;