import React from "react";
import "../styles/postList.css";
import PostCreator from "./postCreator";
import Post from "./Post";

function PostList() {
    

  return (
    <>
    <PostCreator />
    <div className="posts">
        <Post />
        <Post />
        <Post />
    </div>
    </>
  )
}

export default PostList