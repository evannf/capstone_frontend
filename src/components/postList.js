import React from "react";
import "../styles/postList.css";
import PostCreator from "./postCreator";
import Post from "./Post";
import { Posts } from "../mockData.js";

function PostList() {
    

  return (
    <>
    <PostCreator />
    <div className="posts">
        {Posts.map((post) => (
            <Post key={ post.id } post = { post }/>
        ))}
       
    </div>
    </>
  )
}

export default PostList