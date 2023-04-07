import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
export default function Pet({ pet }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="pet-friends container">
      <p>
        {pet.name} ({pet.type})
      </p>
      <button onClick={handleLike} className="button-pets">
        {liked ? <FcLike /> : <FcLikePlaceholder />}
      </button>
    </div>
  );
}
