// import "./home.css";
import TopBar from "../components/topbar";
import Leftbar from "../components/leftbar/leftbar";
import Rightbar from "../components/rightbar";
import Feed from "../components/feed";

const Home = () => {
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
