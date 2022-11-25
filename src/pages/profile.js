import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// import { useParams } from "react-router";
import Axios from "axios";

function Profile() {
    const [user, setUser] = useState({});
    // const id = useParams().id;

    useEffect(() => {
        Axios.get("http://localhost:3001/users/:id").then((response) => {
          setUser(response.data)
          console.log(response)
        })
      }, [user])


    // useEffect(() => {
    //     const getUser = async () => {
    //         const res = await Axios.get(`/users/${id}`);
    //         setUser(res.data)
    //     } 
    //     getUser() ;
    // }, [id])

    return(
        <>
            <Navbar />
            <div className="profilePage">

            </div>
        </>
    )
}

export default Profile