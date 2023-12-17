// import "./home.css";
import TopBar from "../components/topbar";
import Leftbar from "../components/leftbar/leftbar";
import Rightbar from "../components/rightbar";
import Feed from "../components/feed";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
  // set user in session storage
  const {user} = useContext(AuthContext);
  return (
    <>
      <TopBar />
      <div className="w-full md:flex">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
