import React from "react";
import "../styles/postList.css";
import Navbar from "./Navbar";
import PostCreator from './components/PostCreator.js';
import Post from "./Post";

function PostList() {
    

  return (
    <>
    <Navbar />
    {/* <PostCreator /> */}
    <Post />
    <div className="posts">
        <div className="postHeader">
            <img className="profilePic" src='/assets/beef-supreme.png' alt='profile' />
        </div>
        <div className="postBody">

        </div>
        <div className="like">
            <img className="likeButton" alt="like" src="/assets/like-button.jpeg" />
        </div>
    </div>
    </>
  )
}

export default PostList