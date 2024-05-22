import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todo from './features/todolist/todolist';
import Countries from './features/countries/countries';
import Product from './features/products/products';
function App() {
  return (
    <div className=" p-2 border border-2 border-primary">
      <h2 className="text-center">App Component</h2>
      <Counter></Counter>
      <Todo></Todo>
      <Product></Product>
      <Countries></Countries>
    </div>
  );
}

export default App;
