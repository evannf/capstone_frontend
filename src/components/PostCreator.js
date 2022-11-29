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
    if(img){
      const data = new FormData();
      const imgName = Date.now() + img.name;
      data.append('img', img);
      data.append('name', imgName);
      newPost.img = imgName;
      console.log(newPost);
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try{
      await axios.post("/posts", newPost);
      window.location.reload();
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
          ref={body} required
         />
        <input 
          className='postImgInput' 
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