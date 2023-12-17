import React, { useEffect, useState } from "react";
import Friends from "../components/Friends";
import { useParams } from "react-router-dom";
import axios from "axios";

const Follow = () => {
  const {id} = useParams();
  const [follows, setFollows] = useState([])

  useEffect(()=>{
    // get following
    const getFollowing = async ()=>{
      try {
        const res = await axios.get(`/users/following/${id}`)
        setFollows(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    // get followers
    const getFollowers = async ()=>{
      try {
        const res = await axios.get(`/users/follower/${id}`)
        setFollows(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    window.location.pathname.includes("following") ? getFollowing() : getFollowers()
  }, [id])

  return (
    <div className="w-full">
      <div className="p-3 text-lg font-bold text-customPrimary">
        {window.location.pathname.includes("following")
          ? "Following"
          : "Followers"}
      </div>
      <div className="w-full">
      <Friends />
    </div>
    </div>
  );
};

export default Follow;
