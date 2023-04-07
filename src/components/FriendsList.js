import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friendsData, setFriendsData, search }) {
  const filteredFriends = friendsData.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-friends container">
      {filteredFriends.length > 0 ? (
        filteredFriends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            setFriendsData={setFriendsData}
            friendsData={friendsData}
          />
        ))
      ) : (
        <p>Arkadaş bulunamadı.</p>
      )}
    </div>
  );
}
