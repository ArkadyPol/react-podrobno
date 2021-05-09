import s from './OnOff.module.css';

type OnOffPropsType = {
  isOn: boolean
}

function OnOff(props: OnOffPropsType) {
  return (
      <div className={s.box}>
        <BoxChild isOn={props.isOn} text="on"/>
        <BoxChild isOn={props.isOn} text="off"/>
        <Circle isOn={props.isOn}/>
      </div>
  )
}

type BoxChildPropsType = {
  isOn: boolean
  text: string
}

function BoxChild(props: BoxChildPropsType) {
  let color: string;
  if (props.text === 'on') {
    color = props.isOn ? s.green : '';
  } else {
    color = props.isOn ? '' : s.red;
  }
  return <div className={`${s.boxChild} ${color}`}>{props.text}</div>;
}

type CirclePropsType = {
  isOn: boolean
}

function Circle(props: CirclePropsType) {
  let color = props.isOn ? s.green : s.red;
  return <div className={`${s.circle} ${color}`}/>;
}


export default OnOff;