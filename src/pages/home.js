import React from 'react'
import { useState, useEffect } from "react";
import Axios from 'axios';

const Home = () => {
  const[posts, setPosts] = useState([]);
  console.log(posts)
  
  useEffect(() => {
    Axios.get("http://localhost:3001/posts/all").then((response) => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div className='App'>
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