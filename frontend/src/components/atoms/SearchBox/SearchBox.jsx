import React, { useState, useRef } from "react";
import "./_index.scss";

export const SearchBox = () => {
  const searchItem = useRef();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let val = e.target?.value;
    setValue(val);
  };
  const clearInput = (e) => {
    e.preventDefault();
    setValue("");
    searchItem.current.value = "";
  };
  
  return (
    <div className="searchBox">
      <input
        type="search"
        placeholder="Search here"
        ref={searchItem}
        onChange={handleChange}
      />
      <div className="buttonWrapper">
        {searchItem.current.value && (<button onClick={clearInput}>clear</button>)}
        <button>search</button>
      </div>
    </div>
  );
};
