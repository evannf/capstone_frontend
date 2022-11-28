import { useState, useEffect} from "react";
import "../styles/postList.css";
import PostCreator from "./postCreator";
import axios from "axios";
import Post from "./Post";

function PostList({ username }) {
  const[posts, setPosts] = useState([]);
   
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
        <Post key={post._id} post={post} />
      ))}
    </div>

   
    </>
  )
}

export default PostList