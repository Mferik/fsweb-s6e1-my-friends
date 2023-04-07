import React from "react";
import PetsList from "./PetsList";
import { FaExchangeAlt } from "react-icons/fa";
export default function Friend({ friend, setFriendsData, friendsData }) {
  const handleMarriedChange = () => {
    const updatedMarried = { ...friend, married: !friend.married };
    const updatedFriendsData = friendsData.map((f) =>
      f.id === friend.id ? updatedMarried : f
    );
    setFriendsData(updatedFriendsData);
  };

  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          <h3>Adı: {friend.name} </h3>
          <p>Yaş: {friend.age} </p>
          <p>
            Evli mi?: {friend.married ? "Evet" : "Hayır"}{" "}
            <button className="change-button" onClick={handleMarriedChange}>
              <FaExchangeAlt />
            </button>
          </p>
          <div>
            Hobileri:
            <ul>
              {friend.hobbies.map((hobi) => (
                <li key={hobi}>{hobi}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <PetsList pets={friend.pets} />
        </div>
      </div>
    </div>
  );
}
