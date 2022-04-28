import React, { useEffect, useState } from "react";
import "./Popular.scss";
import { Link } from "react-router-dom";
const axios = require("axios");

const Popular = ({ setError }) => {
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
          setError(false);
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 402 || error.response.status === 429) {
            setError(true);
          }
        });
    }
  };

  const popularEl = popular.map((recipe) => {
    return (
      <Link key={recipe.id} to={`/recipe/${recipe?.id}`} className="card">
        {recipe?.image && <img src={recipe?.image} alt="recipe.title" />}
        {recipe?.dishTypes && <h2>{recipe?.dishTypes[0]}</h2>}
        {recipe?.title && <h3>{recipe?.title}</h3>}
        {recipe?.sourceName && (
          <p className="author">By {recipe?.sourceName}</p>
        )}
      </Link>
    );
  });

  return <div className="popular">{popularEl}</div>;
};

export default Popular;
