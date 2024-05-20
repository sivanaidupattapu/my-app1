import logo from './logo.svg';
import './App.css';
import StudentForm from './studentform';
import Employee from './employeeform';
function App() {
  return (
    <div className='p-2 border border-2 border-primary'>
      <Employee></Employee>
      <StudentForm></StudentForm>
    </div>
  );
}

export default App;
