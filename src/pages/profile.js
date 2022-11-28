import React from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import "../styles/profile.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;

  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await axios.get("http://localhost:3001/users?username=Beef-Supreme");
  //     setUser(res.data);
  //     console.log(res.data);
  //   };
  //   getUser();
  // }, [])

  useEffect(()=>{
    const getUsers = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    }
    getUsers();
  }, [username])


    return(
        <>
            <Navbar />
            <div className="profilePage">
              <div className="profileCard">
                <img className="profileImg" src={`${PF}beef-supreme.png`} alt="profilePic" />
                <span className="profileUsername"> Username: {username} </span>
                <span className="bio"> Bio: {user.bio}  </span>
              </div>
              <div className="recentPosts">
                <PostList username="BeefSupreme"/>
              </div>
            </div>
        </>
    )
}

export default Profile