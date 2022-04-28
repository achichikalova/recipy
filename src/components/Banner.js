import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import { motion } from "framer-motion";

const axios = require("axios");

const Banner = () => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const checkBanner = localStorage.getItem("banner");

    if (checkBanner) {
      setRecipe(JSON.parse(checkBanner));
    } else {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`;
      await axios
        .get(URL)
        .then((res) => {
          localStorage.setItem("banner", JSON.stringify(res.data.recipes[0]));
          setRecipe(res.data.recipes[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Link to={`/recipe/${recipe?.id}`} className="banner">
      {recipe?.image && (
        <motion.img
          src={recipe?.image}
          alt="recipe.title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        />
      )}
      {recipe?.dishTypes && <h2>{recipe?.dishTypes[0]}</h2>}
      {recipe?.title && <h3>{recipe?.title}</h3>}
      {recipe?.sourceName && <p className="author">By {recipe?.sourceName}</p>}
    </Link>
  );
};

export default Banner;
