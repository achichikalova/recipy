import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import RecipePreview from "../components/RecipePreview";
import "./All.scss";
import { motion } from "framer-motion";
import Error from "../components/Error";

const All = () => {
  const [all, setAll] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const checkAll = localStorage.getItem("all");

    if (checkAll) {
      setAll(JSON.parse(checkAll));
    } else {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`;
      await axios
        .get(URL)
        .then((res) => {
          localStorage.setItem("all", JSON.stringify(res.data.recipes));
          setAll(res.data.recipes);
          setError(false);
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 402) {
            setError(true);
          }
        });
    }
  };

  const allRecipe = all.map((recipe) => {
    return <RecipePreview key={recipe.id} recipe={recipe} />;
  });

  return (
    <motion.div
      className="all-recipe-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Category />
      <div className="all-recipe">{allRecipe}</div>
      {error && <Error error={error} />}
    </motion.div>
  );
};

export default All;
