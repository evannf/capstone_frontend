import { useState } from 'react';
import "../styles/post.css";
import { Users } from "../mockData.js"

function Post({ post }) {
    const [likes, setLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likesHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postHeader'>

                <img className='profilePic'
                    src={Users.filter((user) => user.id === post.userId)[0].profilePic}
                    alt='profile' />

                <span className='username'>
                    {post.username}
                </span>

            </div>
            <div className='postBody'>
                <span className='text'>
                    {post.body}
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
                    <span className='likeNumber'> {likes} people like this</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post