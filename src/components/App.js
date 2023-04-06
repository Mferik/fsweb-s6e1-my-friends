import React, { useState } from "react";
import Search from "./Search";
import FriendsList from "./FriendsList";
import data from "../dummy-data/friends";

export default function App() {
  const [search, setSearch] = useState("");
  const [friendsData, setFriendsData] = useState(data);

  /* 👉 Buraya state tanımlamak gerekli mi? */

  return (
    <div className="app-friends container">
      <Search search={search} setSearch={setSearch} />
      <FriendsList
        friendsData={friendsData}
        setFriendsData={setFriendsData}
        search={search}
      />
    </div>
  );
}
