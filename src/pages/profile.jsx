import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Feed from "../components/feed";
import Leftbar from "../components/leftbar/leftbar";
import Rightbar from "../components/rightbar";
import TopBar from "../components/topbar";
import { Edit, MoreVert } from "@mui/icons-material";
import { AuthContext } from "../context/authContext";
// import "./profile.css";

const Profile = () => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext)
  const [user, setUser] = useState({});
  const { username } = useParams();
  const [showEdit, setShowEdit] = useState(false)
  const [ownProfile, setOwnProfile] = useState(currentUser._id === user?._id)
  const navigate = useNavigate()

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

  // check if profile is current user's
  useEffect(() => {
    setOwnProfile(currentUser._id === user?._id)
  }, [currentUser._id, user?._id])

  // show & hide edit profile button
  const handleEditProfile = () => {
    setShowEdit(!showEdit)
  }

  // navigate to edit profile page
  const goToEditProfilePage = () => {
    navigate(`/edit/${currentUser._id}`)
  }

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
              {ownProfile && <div className="absolute z-10 top-4 right-3">
                <div className="flex items-center justify-end text-customPrimary" onClick={handleEditProfile}>
                  <MoreVert sx={{ fontSize: "28px" }} />
                </div>
                {showEdit && (
                  <div className="flex items-center py-2 pl-6 pr-2 bg-white rounded-sm hover:bg-hoverColor mt-1.5"
                    onClick={goToEditProfilePage}
                  >
                    <span>Edit profile</span>
                    <div className="ml-1 text-customPrimary">
                      <Edit sx={{ fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                    </div>
                  </div>
                )}
              </div>}
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
