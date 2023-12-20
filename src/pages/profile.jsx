import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feed from "../components/feed";
import Leftbar from "../components/leftbar/leftbar";
import Rightbar from "../components/rightbar";
import TopBar from "../components/topbar";
// import "./profile.css";

const Profile = () => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { username } = useParams();

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // get profile user
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${baseUrl}/api/users/?username=${username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [username, baseUrl]);

  return (
    <>
      <TopBar />
      <div className="md:flex">
        <Leftbar />
        <div className="md:flex-[9]">
          <div>
            <div className="relative h-80">
              <img
                className="object-cover w-full h-64"
                src={user.coverPicture ? baseUrl + `/images/${user.coverPicture}` : baseUrl + "/images/Person/noCover.jpeg"}
                alt=""
              />
              <img
                className="w-[150px] h-[150px] rounded-full absolute top-44 left-0 right-0 m-auto border-solid border-white border-[3px]"
                src={
                  user.profilePicture
                    ? baseUrl + `/images/${user.profilePicture}`
                    : baseUrl + "/images/Person/10.png"
                }
                alt=""
              />
            </div>
            <div className="flex items-center justify-center flex-col mt-2.5">
              <h4 className="text-2xl">{user.username}</h4>
              <span className="font-light">{user.desc}</span>
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse">
            <Rightbar profile user={user} />
            <Feed username={username} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
