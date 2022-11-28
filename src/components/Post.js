import { useState, useEffect } from 'react';
import "../styles/post.css";
import axios from 'axios';

function Post({ post }) {
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    console.log(post)

    useEffect(() => {
        const getUser = async () => {
          const res = await axios.get(`http://localhost:3001/users/${post.username}`);
          setUser(res.data);
          console.log(res.data);
        };
        getUser();
      }, [])


    const likesHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1)
        setIsLiked(!isLiked)
    };

  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postHeader'>

                <img className='profilePic'
                    src={user.profilePic || PF + 'patty.webp'}
                    alt='profilePic' />

                <span className='username'>
                    {post.username}
                </span>

            </div>
            <div className='postBody'>
                <span className='text'>
                    Post: {post.body}
                </span>
                <img className='postImg' src={ PF + post.pic } alt='postPic'/>
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
            </div>
        </div>
    </div>
  )
}

export default Post