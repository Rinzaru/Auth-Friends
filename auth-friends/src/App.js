import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./components/login";
import FriendsPage from "./components/friendsPage";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <h1>Meet Friends!</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/friendspage">Private Route</Link>
      </button>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friendspage" component={FriendsPage} />
    </div>
  );
}

export default App;
