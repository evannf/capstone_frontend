import React from 'react'
import { useState, useEffect } from "react";
import Axios from 'axios';
import Navbar from '../components/Navbar.js';
import "../styles/home.css";
import PostList from '../components/PostList.js';

const Home = () => {
  const[posts, setPosts] = useState([]);

  
  useEffect(() => {
    Axios.get("http://localhost:3001/posts/all").then((response) => {
      setPosts(response.data.posts)
      // console.log(response)
    })
  }, [])


  return (
    <div className='home'>
    <Navbar />
    <PostList />

      <div className='Posts'>
          {posts.map((post) => {
            return <div>
              <h1>Username: {post.username}</h1>
              <h3>{post.body}</h3>
            </div>
          })}
      </div>
    </div>
  )
}

export default Home