import './App.css';

function App() {
  debugger
  return (
      <div>
        This App Component
        <Rating/>
        <Accordion/>
      </div>
  );
}

function Star() {
  return <div>star</div>
}

function Rating() {
  debugger
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

function Accordion() {
  debugger
  return (
      <div>
        <h3>Меню</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
  );
}

export default App;
