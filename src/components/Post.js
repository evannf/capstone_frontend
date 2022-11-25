import React from 'react';
import "../styles/post.css";

function Post() {
  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postHeader'>
                <img className='profilePic' src='/assets/beef-supreme.png' alt='profile' />
                <span className='username'>Username</span>
            </div>
            <div className='postBody'>
                <span className='text'>
                    Mock Post 🥩
                </span>
                <img className='postImg' src='/assets/beef-supreme.png' alt='postPic'/>
            </div>
            <div classname='postInteract'>
                <div className='likes'>
                    <img className='likeIcon' src='assets/like-button2.png' alt='like' />
                    <span className='likeNumber'> 12 Likes </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post