import logo from './logo.svg';
import './App.css';
import Eventactions from './events';
import Arrayevent from './features/array/arayevent';
function App() {
  return (
    <div>
      <h2 style={{color:'purple'}}>Event Actions button color to Background colors </h2>
      <Eventactions></Eventactions>
      <hr></hr>
      <Arrayevent></Arrayevent>
    </div>
  );
}

export default App;
