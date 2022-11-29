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

  const handleEdit = (id, e) => {
    e.preventDefault()
    const body = posts.body
    fetch(baseURL + '/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          body: e.target.value
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
    })
    .then(resJson => {
      posts.body = e.target.value
    })
    .catch(err => (console.log(err)))
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
        <Post key={post._id} post={post} handleDelete={handleDelete} handleEdit={handleEdit}/>
      ))}
    </div>

   
    </>
  )
}

export default PostList