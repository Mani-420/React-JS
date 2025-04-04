import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2 className="text-xl font-bold m-4">Login</h2>
      <input
        className="border-2 border-black rounded-md p-1 m-1"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border-2 border-black rounded-md p-1 m-1"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 m-1 p-1 rounded-md hover:bg-blue-400"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
