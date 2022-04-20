import React, { useState } from "react";
import Category from "../components/Category";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import axios from "axios";
import RecipePreview from "../components/RecipePreview";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearched(input);
    setInput("");
  };

  const getSearched = async (query) => {
    console.log(query);
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=3&query=${query}`;

    await axios
      .get(URL)
      .then((res) => {
        if (res.data.totalResults > 0) {
          setSearchedRecipes(res.data.results);
          setError("");
        } else {
          setError("Nothing was found, try again...");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchedRecipe = searchedRecipes.map((recipe) => {
    return <RecipePreview key={recipe.id} recipe={recipe} />;
  });

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
      <div className="recipe-container">{searchedRecipe}</div>
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default Search;
