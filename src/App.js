import logo from './logo.svg';
import './App.css';
import Ice from './icecream';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <h2>App</h2>
      <ul>
        <li> <Link to='/ice'>ice</Link> </li>
        <li> <Link to='/bike'>bike</Link> </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
