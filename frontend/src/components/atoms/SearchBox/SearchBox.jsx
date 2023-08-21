import React, { useState, useRef, useEffect } from "react";
import "./_index.scss";

const SearchButton = ({}) => {
  return (
    <>
      <button>search</button>
    </>
  );
};
const ClearButton = () => {
  return (
    <>
      <button>clear</button>
    </>
  );
};

const SearchInput = ({ placeholder, ref, onChangeFunction, id }) => {
  return (
    <>
      <input
      className="searchInput"
        type="search"
        name="Hello"
        id={id}
        onChangeFunction={onChangeFunction}
        ref={ref}
        placeholder={placeholder}
      />
    </>
  );
};

export const SearchBox = () => {
  const searchItem = useRef();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // let val = e.target?.value;
    // setValue(val);
  };

  const clearInput = (e) => {
    e.preventDefault();
    // setValue("");
    // searchItem.current.value = "";
  };

  return (
    <div className="searchBox">
      <searchInput placeholder={'lorem Ipsum'}/>
      <div className="buttonWrapper">
        {<button onClick={clearInput}>clear</button>}
        <button>search</button>
      </div>
    </div>
  );
};

export { SearchButton, ClearButton, SearchInput}
