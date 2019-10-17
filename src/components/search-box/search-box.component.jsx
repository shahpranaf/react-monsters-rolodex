import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ searchField, handleSearch, placeholder }) => (
    <input className="search" type="text" placeholder={placeholder} value={searchField} onChange={handleSearch} />
);

export default SearchBox;
