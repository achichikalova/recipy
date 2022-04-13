import React from "react";
import Category from "../components/Category";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const Search = () => {
  return (
    <div className="search">
      <Category />
      <form className="input-wrap">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Find a recipe..." />
        <MdClear className="cancel-icon"/>
      </form>
    </div>
  );
};

export default Search;
