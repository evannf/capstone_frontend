import Home from './pages/home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./components/login.js";
import Navbar from './components/Navbar.js';
// import Register from './components/register.js';
// import { useState, useEffect } from "react";
// import Axios from 'axios';


const App = () => {

  return (
  <Router>
  <Navbar />
  <Routes>

    <Route path='/posts/all' element={<Home />} />

    {/* <Route path='/users/login' element={<Login />} />
    <Route path='/users/register' element={<Register />} /> */}
  </Routes>
  {/* <Header />
  <Home /> */}
  </Router>
  );
}


//   return (
//     <div className='App'>
//       <div className='Posts'>
//           {posts.map((post) => {
//             return <div>
//               <h1>Username: {post.username}</h1>
//               <h3>{post.body}</h3>
//             </div>
//           })}
//       </div>
//     </div>
//   )
// }

// function App() {
//   return (
//   <Router>
//   <Navbar />
//   <Routes>
//     <Route path='/posts/all' element={<Home />} />
//     <Route path='/users/login' element={<Login />} />
//     <Route path='/users/register' element={<Register />} />
//   </Routes>
//   {/* <Header />
//   <Home /> */}
//   </Router>
//   );
// }

export default App;
