import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from "../utils/axioswithAuth";
import { Link } from "react-router-dom";
import { Card, Button } from "reactstrap";
const FriendsPage = () => {
  const [friends, setFriends] = useState({
    friendList: [],
  });

  const getData = () => {
    axios()
      .get("/api/friends")
      .then((res) => {
        console.log(res, "friends");
        setFriends({ ...friends, friendList: [...res.data] });
      })
      .catch((err) => console.log(err));
  };

  console.log(friends.friendList, "friends");

  const deleteData = (friendId) => {
    axios()
      .delete(`/api/friends/${friendId}`)
      .then((res) => {
        console.log(res.data);
        setFriends({ ...friends, friendList: [...res.data] });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: "40%", marginTop: "5px", marginBottom: "5px" }}>
        Friends List
      </h1>
      <Button color="info" style={{ width: "15%", marginLeft: "40%" }}>
        <Link to="/addfriend" style={{ color: "white" }}>
          Add Friend
        </Link>
      </Button>
      {friends.friendList.map((friend) => {
        return (
          <div key={friend.id}>
            <Card
              style={{
                width: "45%",
                marginLeft: "25%",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              <h1>{friend.name}</h1>
              <p>Email: {friend.email}</p>
              <p>Quote: “{friend.quote}”</p>
              <p>Age: {friend.age}</p>
              <Button
                color="info"
                onClick={() => {
                  deleteData(friend.id);
                }}
              >
                Delete Friend
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsPage;
