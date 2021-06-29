import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import {useState} from 'react';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [switchOn, setSwitchOn] = useState<boolean>(false);
  console.log('App rendering')
  return (
      <div className="App">
        <PageTitle title="This App Component"/>
        <UncontrolledAccordion title="Menu"/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledRating onChange={(value) => console.log(value)}/>
        <OnOff on={switchOn} setOn={setSwitchOn}/>
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}

export default App;
