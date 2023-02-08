import './home.css';
import TopBar from '../../components/topbar/topbar';
import Leftbar from '../../components/leftbar/leftbar';
import Rightbar from '../../components/rightbar/rightbar';
import Feed from '../../components/feed/feed'

const Home = () => {
    return (  
        <>
        <TopBar />
        <div className="homeContainer">
            <Leftbar />
            <Feed />
            <Rightbar />    
        </div>
        </>
    );
}
 
export default Home;