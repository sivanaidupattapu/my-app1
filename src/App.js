import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todo from './features/todolist/todolist';
function App() {
  return (
    <div className="text-center p-2 border border-2 border-primary">
      <h2>App Component</h2>
      <Counter></Counter>
      <Todo></Todo>
    </div>
  );
}

export default App;
