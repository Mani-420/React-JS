import './App.css';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-gray-400 m-5 text-2xl font-bold">React ContextAPI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
