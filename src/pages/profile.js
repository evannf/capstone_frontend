import React from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import "../styles/profile.css"
// import { useParams } from "react-router";
// import Axios from "axios";

function Profile() {
    return(
        <>
            <Navbar />
            <div className="profilePage">
              <div className="profileCard">
                <img className="profileImg" src="assets/beef-supreme.png" alt="profilePic" />
                <span className="profileUsername"> Beef Supreme </span>
                <span className="bio"> King of the Beef, founder of Social Meatia. All hail 🥩.  </span>
              </div>
              <div className="recentPosts">
                <PostList />
              </div>
            </div>
        </>
    )
}

export default Profile