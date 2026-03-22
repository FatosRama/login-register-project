import logo from './logo.svg';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
