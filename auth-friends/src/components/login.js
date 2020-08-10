import React, { useState } from "react";
import { axiosWithAuth as axios } from "../utils/axioswithAuth";
import { useHistory } from "react-router";
import FriendsPage from "./friendsPage";
const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  console.log(credentials);
  const { username, password } = credentials;
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios()
      .post("/api/login", credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        history.push("/friendspage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          User Name:
          <input name="username" value={username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
