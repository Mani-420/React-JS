import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <h1 className="bg-gray-800 text-white text-4xl p-4 font-bold">
        Todo App with Redux Tool-Kit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
