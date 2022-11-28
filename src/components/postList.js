import { useState, useEffect} from "react";
import "../styles/postList.css";
import PostCreator from "./postCreator";
import axios from "axios";
import Post from "./Post";

function PostList({post}) {
  const[posts, setPosts] = useState([]);
   
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("http://localhost:3001/posts/all");
      setPosts(res.data.posts);
      // console.log(res.data.posts);
    };
    getPosts();
  }, [])

  //   useEffect(() => {
  //   axios.get("http://localhost:3001/posts/all").then((response) => {
  //     setPosts(response.data.posts)
  //     // console.log(response)
  //   })
  // }, [])

  return (
    <>
    <PostCreator />
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>

    {/* <div className='Posts'>
          {posts.map((post) => {
            return <div className="posts">
              <h1>Username: {post.username}</h1>
              <h3>{post.body}</h3>
              <span>{post.img}</span>
            </div>
          })}
      </div> */}

   
    </>
  )
}

export default PostList