import React, { useState } from "react";
import Category from "../components/Category";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  console.log(searchedRecipes);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearched(input);
    setInput("");
  };

  const getSearched = async (query) => {
    const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${query}`;

    await axios
      .get(URL)
      .then((res) => {
        setSearchedRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="search">
      <Category />
      <form onSubmit={handleSubmit} className="input-wrap">
        <FaSearch className="search-icon" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Find a recipe..."
          value={input}
        />
        <MdClear className="cancel-icon" />
      </form>
    </div>
  );
};

export default Search;
