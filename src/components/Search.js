import React from "react";

export default function Search({ search, setSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    console.log(search);
  };

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
