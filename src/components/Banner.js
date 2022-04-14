import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
const axios = require("axios");

const Banner = () => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`;
    await axios
      .get(URL)
      .then((res) => {
        setRecipe(res.data.recipes[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Link to={`/recipe/${recipe?.id}`} className="banner">
      {recipe.image && <img src={recipe.image} alt="recipe.title" />}
      {recipe.dishTypes && <h2>{recipe.dishTypes[0]}</h2>}
      {recipe.title && <h3>{recipe.title}</h3>}
      {recipe.sourceName && <p className="author">By {recipe.sourceName}</p>}
    </Link>
  );
};

export default Banner;
