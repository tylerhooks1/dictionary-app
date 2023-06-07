import React from "react";
import "./search.css";
import search from "../../assets/icon-search.svg";

const Search = () => {
  return (
    <div className="dictionary__search">
      <input tye="text" placeholder="search" />
      <img src={search} alt="search" />
    </div>
  );
};

export default Search;
