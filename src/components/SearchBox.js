import React, { useState } from "react";
import axios from "axios";
const SearchBox = ({ setLocations }) => {
  const [search, setSearch] = useState('');
  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((res) => setLocations(res.data));
  };
  const validation = (e) => {
    console.log(e.target.value);
    e.target.value > 126
      ? alert("Location does not exist")
      : e.target.value === 0
      ? alert("Location does not exist")
      : e.target.value < 0
      ? alert("Location does not exist")
      : setSearch(e.target.value);
  };

  return (
    <div className="searchBox">
      <input
        type="number"
        min={1}
        max={127}
        placeholder="Write the ID of the location"
        onChange={(e) => validation(e)}
        value={search}
      />
      <button onClick={() => searchLocation()}>Search</button>
    </div>
  );
};

export default SearchBox;
