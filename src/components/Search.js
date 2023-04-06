import React from "react";

export default function Search({ search, setSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    console.log(search);
  };

  /* 👉 Buraya props lazım mı? bir de bir yardımcı function yazsak iyi olur mu? */

  return (
    <div className="search-friends container">
      <input
        type="text"
        placeholder="Arkadaşının ismini ara..."
        onChange={handleSearch}
      />
    </div>
  );
}
