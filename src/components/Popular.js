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
    const checkPopular = localStorage.getItem("popular");

    if (checkPopular) {
      setPopular(JSON.parse(checkPopular));
    } else {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`;
      await axios
        .get(URL)
        .then((res) => {
          localStorage.setItem("popular", JSON.stringify(res.data.recipes));
          setPopular(res.data.recipes);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

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
