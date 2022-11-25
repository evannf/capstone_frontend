import Home from './pages/home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login.js";
import Profile from "./pages/profile.js";
import Register from './pages/register.js';


const App = () => {

  return (

  <Router>
    <Home />
 
    <Routes>

      <Route path='/posts/all' element={<Home />} />
      <Route path='/user/:id' element={<Profile />} />
      <Route path='/users/login' element={<Login />} />
      <Route path='/users/register' element={<Register />} />

    </Routes>
  </Router>
  );
}



export default App;
