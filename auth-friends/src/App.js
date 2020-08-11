import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./components/login";
import FriendsPage from "./components/friendsPage";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/addFriend";
import { Button } from "reactstrap";
import Image from "react-bootstrap/Image";
import friendImg from "./images/friends.png";
function App() {
  const image =
    "https://e7.pngegg.com/pngimages/256/733/png-clipart-f-r-i-e-n-d-s-characters-friends-cast-early-season-at-the-movies-friends.png";
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(https://e7.pngegg.com/pngimages/256/733/png-clipart-f-r-i-e-n-d-s-characters-friends-cast-early-season-at-the-movies-friends.png)",
      }}
    >
      <h1 style={{ marginLeft: "38%", marginTop: "5px", marginBottom: "5px" }}>
        Meet Friends!
      </h1>
      <Button color="info" style={{ width: "9%", marginLeft: "32%" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </Button>
      <Button color="info" style={{ width: "9%", marginLeft: "2%" }}>
        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      </Button>
      <Button color="info" style={{ width: "9%", marginLeft: "2%" }}>
        <Link to="/friendspage" style={{ color: "white" }}>
          Private Route
        </Link>
      </Button>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friendspage" component={FriendsPage} />
      <PrivateRoute exact path="/addfriend" component={AddFriend} />
    </div>
  );
}

export default App;
