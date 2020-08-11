import React, { useState } from "react";
import { axiosWithAuth as axios } from "../utils/axioswithAuth";
import { useHistory } from "react-router";
import { Card, Button } from "reactstrap";
const AddFriend = () => {
  const [addFriend, setAddFriend] = useState({
    name: "",
    email: "",
    age: "",
  });

  const history = useHistory();

  const { name, email, age } = addFriend;

  const adding = (e) => {
    e.preventDefault();
    axios()
      .post("/api/friends", addFriend)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    history.push("/friendspage");
  };

  const handleChange = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={adding}>
        <Card style={{ width: "35%", marginLeft: "30%", marginTop: "2%" }}>
          <h1 style={{ marginLeft: "25%", marginTop: "2%" }}>Add a friend!</h1>
          <label style={{ marginLeft: "22%", marginTop: "10px" }}>
            Name: <input name="name" value={name} onChange={handleChange} />
          </label>
          <label style={{ marginLeft: "23%", marginTop: "10px" }}>
            Email:{" "}
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label style={{ marginLeft: "25%", marginTop: "10px" }}>
            Age: <input name="age" value={age} onChange={handleChange} />
          </label>
          <Button
            color="info"
            style={{ width: "25%", marginLeft: "38%", marginBottom: "10px" }}
          >
            Add Friend
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default AddFriend;
