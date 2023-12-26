import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Messenger from "./pages/messenger";
import Follow from "./pages/Follow";
import ScrollToTop from "./components/ScrollToTop";
import LazyPage from "./components/LazyPage";
import EditProfile from "./pages/EditProfile";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/messenger"
          element={!user ? <Navigate to="/" /> : <Messenger />}
        />
        <Route
          path="/profile/:username"
          element={user ? <Profile /> : <Navigate to="/register" />}
        />
        <Route path="/followers/:id" element={<Follow />} />
        <Route path="/following/:id" element={<Follow />} />
        <Route path="/nocontent" element={<LazyPage />} />
        <Route path="/edit/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
