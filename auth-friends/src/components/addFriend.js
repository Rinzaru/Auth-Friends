import React, { useState } from "react";
import { axiosWithAuth as axios } from "../utils/axioswithAuth";
import { useHistory } from "react-router";
import { Card, Button } from "reactstrap";
const AddFriend = () => {
  const [addFriend, setAddFriend] = useState({
    id: Date.now(),
    name: "",
    email: "",
    age: "",
    quote: "",
  });

  const history = useHistory();

  const { name, email, age, quote } = addFriend;

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
            Name:{" "}
            <input name="name" value={name} onChange={handleChange} required />
          </label>
          <label style={{ marginLeft: "23%", marginTop: "10px" }}>
            Email:{" "}
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
            <label style={{ marginTop: "10px" }}>
              Quote:
              <input
                name="quote"
                value={quote}
                onChange={handleChange}
                required
              />
            </label>
          </label>
          <label style={{ marginLeft: "25%", marginTop: "10px" }}>
            Age:{" "}
            <input name="age" value={age} onChange={handleChange} required />
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
