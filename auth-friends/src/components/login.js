import React, { useState } from "react";
import { axiosWithAuth as axios } from "../utils/axioswithAuth";
import { useHistory } from "react-router";
import { Card, Button } from "reactstrap";
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
        <Card style={{ width: "35%", marginLeft: "30%", marginTop: "2%" }}>
          <label style={{ marginLeft: "20%", marginTop: "10px" }}>
            User Name:
            <input
              name="username"
              value={username}
              placeholder="username"
              onChange={handleChange}
              style={{ marginLeft: "5px" }}
            />
          </label>
          <label style={{ marginLeft: "23%", marginTop: "10px" }}>
            Password:
            <input
              style={{ marginLeft: "5px" }}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <Button
            color="info"
            style={{ width: "15%", marginLeft: "45%", marginBottom: "10px" }}
          >
            Login
          </Button>
        </Card>
      </form>
    </div>
  );
};
export default Login;
