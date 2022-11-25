import React from 'react'
import "../styles/postCreator.css"

function PostCreator() {
  return (
    <div className='createPost'>
      <div className='postBody'>
        <input className='postInput' placeholder="What's on your meat-mind?"/>
      </div>
      <div className='postButton'>
        <button> Post </button>
      </div>
    </div>
  )
}

export default PostCreator