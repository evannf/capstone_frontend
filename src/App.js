import Home from './pages/home.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./pages/login.js";
import Profile from "./pages/profile.js";
import Register from './pages/register.js';



const App = () => {

  return (
  <>
  <Router>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  </Router>
  </>
  );
}



export default App;
