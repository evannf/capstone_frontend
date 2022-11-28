import { useState, useEffect} from "react";
import "../styles/postList.css";
import PostCreator from "./postCreator";
import axios from "axios";
// import { Posts } from "../mockData.js";

function PostList() {
  const[posts, setPosts] = useState([]);
   
  useEffect(() => {
    axios.get("http://localhost:3001/posts/all").then((response) => {
      setPosts(response.data.posts)
      // console.log(response)
    })
  }, [])
  
  return (
    <>
    <PostCreator />
    <div className='Posts'>
          {posts.map((post) => {
            return <div className="posts">
              <h1>Username: {post.username}</h1>
              <h3>{post.body}</h3>
              <span>{post.img}</span>
            </div>
          })}
      </div>

   
    </>
  )
}

export default PostList