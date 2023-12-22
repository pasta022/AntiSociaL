import React, { useEffect, useState } from "react";
import Friends from "../components/Friends";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import TopBar from "../components/topbar";

const Follow = () => {
  const { id } = useParams();
  const [follows, setFollows] = useState([]);
  const [loading, setLoading] = useState(false);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    // get following
    const getFollowing = async () => {
      try {
        setLoading(true);
        const res = await axios.get(baseUrl + `/api/users/following/${id}`);
        console.log(res.data);
        setFollows(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    };

    // get followers
    const getFollowers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(baseUrl + `/api/users/follower/${id}`);
        console.log(res.data);
        setFollows(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    };
    window.location.pathname.includes("following")
      ? getFollowing()
      : getFollowers();
  }, [baseUrl, id]);

  return (
    <>
      <TopBar />
      <div className="w-full">
        <div className="p-3 text-lg font-bold text-customPrimary">
          {window.location.pathname.includes("following")
            ? "Following"
            : "Followers"}
        </div>
        <div className="w-full">
          {loading ? (
            <Loader />
          ) : (
            <>
              {follows.length > 0 ? (
                <>
                  {follows.map((friend) => (
                    <Friends friend={friend} key={friend._id} />
                  ))}
                </>
              ) : (
                <div className="mt-5 text-center text-customPrimary">
                  No{" "}
                  {window.location.pathname.includes("following")
                    ? "Following"
                    : "Followers"}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Follow;
