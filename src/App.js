import logo from './logo.svg';
import './App.css';
import Country from './countries';

function App() {
  return (
    <div className="border border-2 border-success p-2">
    <h2 className='text-center text-danger-emphasis'>World Countries</h2>
    <Country></Country>
    </div>
  );
}

export default App;
