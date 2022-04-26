import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "../components/RecipePreview";
import "./Type.scss";
import { motion } from "framer-motion";

const Type = ({ setError }) => {
  const [recipes, setRecipes] = useState([]);

  let params = useParams();

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  const getRecipes = async (type) => {
    const checkType = localStorage.getItem(`${type}`);

    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_SECOND}&type=${type}&number=9`;

    if (checkType) {
      setRecipes(JSON.parse(checkType));
    } else {
      await axios
        .get(URL)
        .then((res) => {
          localStorage.setItem(`${type}`, JSON.stringify(res.data.results));
          setRecipes(res.data.results);
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 402 || error.response.status === 429) {
            setError(true);
          }
        });
    }
  };

  const recipeType = recipes.map((recipe) => {
    return <RecipePreview key={recipe.id} recipe={recipe} />;
  });

  return (
    <motion.div
      className="recipe-type"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {recipeType}
    </motion.div>
  );
};

export default Type;
