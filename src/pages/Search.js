import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import axios from "axios";
import RecipePreview from "../components/RecipePreview";

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
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=3&query=${query}`;

    await axios
      .get(URL)
      .then((res) => {
        console.log(res.data.results)
        setSearchedRecipes(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchedRecipe = searchedRecipes.map((recipe) => {
    console.log(recipe)
    if (recipe.id) {
      return <RecipePreview key={recipe.id} recipe={recipe} />;
    } else {
      return <h2>Nothing was found, try again...</h2>;
    }
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
    </div>
  );
};

export default Search;
