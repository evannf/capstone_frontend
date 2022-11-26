import React from 'react';
import "../styles/post.css";

function Post({ post }) {
    console.log(post)
  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postHeader'>
                <img className='profilePic' src={post.profilePic} alt='profile' />
                <span className='username'>
                    {post.username}
                </span>
            </div>
            <div className='postBody'>
                <span className='text'>
                    {post.body}
                </span>
                <img className='postImg' src='/assets/beef-supreme.png' alt='postPic'/>
            </div>
            <div className='postInteract'>
                <div className='likes'>
                    <img className='likeButton' src='assets/like-button2.png' alt='like' />
                    <span className='likeNumber'> {post.likes} </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post