import Home from './pages/home.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/login.js";
import Profile from "./pages/profile.js";
import Register from './pages/register.js';
import { AuthContext } from './context/AuthContext.js';
import { useContext } from 'react';



const App = () => {

  const { user } = useContext(AuthContext)

  return (
  <>
  <Router>
    <Routes>

      <Route path='/' element={ user? <Home /> : <Register />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/login' element={ user? <Navigate to="/" /> : <Login />} />
      <Route path='/register' element={ user? <Navigate to="/" /> : <Register />} />

    </Routes>
  </Router>
  </>
  );
}



export default App;
