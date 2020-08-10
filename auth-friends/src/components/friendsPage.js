import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from "../utils/axioswithAuth";
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Friends</h1>
      {friends.friendList.map((friend) => {
        return (
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsPage;
