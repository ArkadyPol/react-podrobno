import './App.css';

function App() {
  console.log('App rendering')
  return (
      <div>
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
      </div>
  );
}

function AppTitle() {
  console.log('AppTitle rendering')
  return <>This App Component</>
}

function Star() {
  console.log('Star rendering')
  return <div>star</div>
}

function Rating() {
  console.log('Rating rendering')
  return (
      <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
  )
}

function AccordionTitle() {
  console.log('AccordionTitle rendering')
  return <h3>Меню</h3>;
}

function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}

function Accordion() {
  console.log('Accordion rendering')
  return (
      <div>
        <AccordionTitle/>
        <AccordionBody/>
      </div>
  );
}

export default App;
