import React from "react";
import Pet from "./Pet";

export default function PetsList({ pets }) {
  return (
    <div className="list-pets-friends container">
      {pets.map((pet) => (
        <li className="pets-list" key={pet.id}>
          <Pet pet={pet} />
        </li>
      ))}
    </div>
  );
}
