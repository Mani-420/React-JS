import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="justify-center items-center flex flex-col h-screen bg-gray-100">
        <h1 className="text-3xl bg-blue-500 p-4">Hello g</h1>
      </div>
    </>
  );
}

export default App;
