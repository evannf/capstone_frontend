import { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from "react-router-dom";
import "../styles/post.css";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Post({ post, handleDelete }) {
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const { user:currentUser } = useContext(AuthContext);
    // console.log(post)

    useEffect(() => {
        const getUser = async () => {
          const res = await axios.get(`/users?username=${post.username}`);
          setUser(res.data);
        //   console.log(res.data);
        };
        getUser();
      }, [post.username])

      useCallback(() => {
        setIsLiked(post.likes.includes(currentUser.username));
      }, [currentUser.username, post.likes]);


    const likesHandler = () => {
        try{
            axios.put(`/posts/${post._id}/like`, { username: currentUser.username });
        } catch (err){}
        setLikes(isLiked ? likes - 1 : likes + 1)
        setIsLiked((prev) => !prev)
        window.location.reload()
        console.log("liked by " + currentUser.username)
    };

  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postHeader'>

                <Link to={`/profile/${user.username}`}>
                <img className='profilePic'
                    src={user.profilePic || PF + 'steak.webp'}
                    alt='profilePic' />
                </Link>

                <span className='username'>
                    {post.username}
                </span>

            </div>
            <div className='postBody'>
                <span className='text'>
                   {post.body}
                </span>

                <img className='postImg' src={ post.img || PF + 'patty.webp'} alt='postPic'/>

            </div>
            <div className='postInteract'>
                <div className='likes'>
                    <img 
                    className='likeButton' 
                    src={`${PF}like-button2.png` }
                    alt='like'
                    onClick={likesHandler} 
                    />
                    <span className='likeNumber'> {post.likes.length} people like this</span>
                </div>
                {/* <button className="editButton" onClick={() => handleEdit(post._id)}> Edit </button> */}
                <button className="deleteButton" onClick={() => handleDelete(post._id)}> Delete </button>
            </div>
        </div>
    </div>
  )
}

export default Post