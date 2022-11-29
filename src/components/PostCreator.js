import React from 'react'
import "../styles/postCreator.css"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext.js"
import axios from 'axios';

function PostCreator() {
  const { user } = useContext(AuthContext);
  const body = useRef()
  const [ img, setImg ] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      body: body.current.value
    }

    try{
      await axios.post("/posts", newPost)
    } catch(err){

    }
  }

  return (
    <form className='createPost'>
      <div className='postBody'>
        <input 
          className='postInput' 
          type="text"
          placeholder="What's on your think-meat?"
          ref={body} required="true"
         />
        <input 
          className='postImg' 
          placeholder='upload an image?'
          type="file"
          id="img"
          accept=".png, .jpeg, .jpg, .webp"
          onChange={ (e) => setImg(e.target.files)}
        />
      </div>
      <div className='postButton'>
        <button onClick={handleSubmit}> Post </button>
      </div>
    </form>
  )
}

export default PostCreator