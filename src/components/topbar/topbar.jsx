// import "./topbar.css";
import {
  SearchRounded,
  Person,
  Chat,
  Notifications,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const TopBar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();

  //chat icon function
  const handleClick = () => {
    navigate("/messenger");
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full gap-2 h-14 bg-customPrimary md:gap-0 md:justify-normal">
      <div className="md:grow-[3]">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="ml-2 text-lg font-bold text-white cursor-pointer md:ml-5 md:text-2xl">
            AntiSociaL
          </span>
        </Link>
      </div>
      <div className="md:grow-[5] hidden md:block">
        <div className="flex items-center justify-between w-full h-8 bg-white rounded-xl">
          <input
            type="search"
            placeholder="Search..."
            className="w-10/12 ml-3 focus:outline-none"
          />
          <div className="mr-2">
            <SearchRounded />
          </div>
        </div>
      </div>
      <div className="md:grow-[4] flex items-center text-white mr-2 md:mr-5 justify-end">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="flex">
          <div className="relative mr-3 cursor-pointer">
            <Person />
            <span className="w-3 h-3 bg-red-700 rounded-full absolute top-[-3px] right-[-2px]"></span>
          </div>
          <div className="relative mr-3 cursor-pointer">
            <Chat onClick={handleClick} />
            <span className="w-3 h-3 bg-red-700 rounded-full absolute top-[-3px] right-[-2px]"></span>
          </div>
          <div className="relative mr-3 cursor-pointer">
            <Notifications />
            <span className="w-3 h-3 bg-red-700 rounded-full absolute top-[-3px] right-[-2px]"></span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "/person/10.png"
            }
            alt=""
            className="object-cover w-8 h-8 rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
