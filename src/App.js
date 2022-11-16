import Home from './pages/home.js';
import Header from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login.js";
import Navbar from './components/Navbar.js';
import Register from './components/register.js';


function App() {
  return (
  <Router>
  <Navbar />
  <Routes>
    <Route path='/posts/all' element={<Home />} />
    <Route path='/users/login' element={<Login />} />
    <Route path='/users/register' element={<Register />} />
  </Routes>
  {/* <Header />
  <Home /> */}
  </Router>
  );
}

export default App;
