import React, { useEffect, useState } from "react";
import RecipePreview from "./RecipePreview";
import "./Popular.scss";
const axios = require("axios");

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`;
    const API = await axios
      .get(URL)
      .then((res) => {
        setPopular(res.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const popularEl = popular.map((recipe) => {
    return <RecipePreview key={recipe.id} recipe={recipe} />;
  });

  return (
    <div className="popular">
      <div className="preview-container">{popularEl}</div>
    </div>
  );
};

export default Popular;
