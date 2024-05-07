import logo from './logo.svg';
import './App.css';
import Country from './countries';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='border border-2 p-2 border-danger'>
      <h2 className='text-center'>World Countries</h2>
      <ul>
        <li> <Link to='/homeapp'>Home</Link> </li>
        <li> <Link to='/countries'>Countries</Link> </li>
      </ul>
      <Outlet></Outlet>
      <div>
      </div>
    </div>
  );
}
export default App;
