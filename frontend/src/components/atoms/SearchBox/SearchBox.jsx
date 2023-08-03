import React, { useState, useRef } from "react";
import "./_index.scss";

export const SearchBox = () => {
  const searchItem = useRef();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
  }
const clearInput = (e) => {
    e.preventDefault();
}
  return (
    <div className="searchBox">
      <input type="search" placeholder="Search here" ref={searchItem} onChange={handleChange} />
      <div className="buttonWrapper">
        <button onClick={clearInput}>clear</button>
        <button>search</button>
      </div>
      <h1>{ value}</h1>
    </div>
  );
};
