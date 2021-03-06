import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import axios from "axios";
import RecipePreview from "../components/RecipePreview";
import { motion } from "framer-motion";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [error, setError] = useState({ search: false, fetch: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearched(input);
    setInput("");
  };

  useEffect(() => {
    if (input) {
      setError((prevState) => ({
        ...prevState,
        search: false,
      }));
    }
  }, [input]);

  const getSearched = async (query) => {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_SECOND}&number=3&query=${query}`;

    await axios
      .get(URL)
      .then((res) => {
        if (res.data.totalResults > 0) {
          setSearchedRecipes(res.data.results);
          setError((prevState) => ({
            ...prevState,
            search: false,
            fetch: false,
          }));
        } else {
          setError((prevState) => ({ ...prevState, search: true }));
          setSearchedRecipes([]);
        }
      })
      .catch((err) => {
        console.error(err);
        if (error.response.status === 402) {
          setError((prevState) => ({ ...prevState, fetch: true }));
        }
      });
  };

  const searchedRecipe = searchedRecipes.map((recipe) => {
    return <RecipePreview key={recipe.id} recipe={recipe} />;
  });

  return (
    <motion.div
      className="search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
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
      <motion.div
        className="recipe-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {searchedRecipe}
        {error.search && (
          <h3>Nothing was found for your search, try again...</h3>
        )}
      </motion.div>
      {error.fetch && (
        <h2 className="error" dangerouslySetInnerHTML={{ __html: error }}></h2>
      )}
    </motion.div>
  );
};

export default Search;
