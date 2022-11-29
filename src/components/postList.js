import { useState, useEffect} from "react";
import "../styles/postList.css";
import PostCreator from "./postCreator";
import axios from "axios";
import Post from "./Post";

let baseURL = "http://localhost:3001"

function PostList({ username }) {
  const[posts, setPosts] = useState([]);


  const handleDelete = (id) => {
    fetch(baseURL + '/posts/' + id, {
      method: 'DELETE'
    }).then( res => {
      const copyPosts = [...posts]
      const findIndex = posts.findIndex(post => post._id === id)
      copyPosts.splice(findIndex, 1)
      setPosts(copyPosts)
    })
  }

  const handleEdit = (id) => {
    
  }
   
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("http://localhost:3001/posts/all");
      setPosts(res.data.posts);
      // console.log(res.data.posts);
    };
    getPosts();
  }, [username])

  return (
    <>
    <PostCreator />
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>

   
    </>
  )
}

export default PostList