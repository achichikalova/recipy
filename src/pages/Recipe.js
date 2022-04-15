import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Recipe.scss";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaUserTimes } from "react-icons/fa";
import { WiTime5 } from "react-icons/wi";

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});

  const params = useParams();

  useEffect(() => {
    getRecipeInfo(params.id);
  }, []);

  const getRecipeInfo = async (id) => {
    const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    await axios
      .get(URL)
      .then((res) => {
        setRecipeInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="recipe-info-container">
      <h1>{recipeInfo.title}</h1>
      <div className="recipe-meta">
        <div className="meta">
          <AiFillLike />
          <h3>{recipeInfo.aggregateLikes}</h3>
        </div>
        <div className="meta">
          <FaUserTimes />
          <h3>{recipeInfo.servings}</h3>
        </div>
        <div className="meta">
          <WiTime5 />
          <h3>{recipeInfo.readyInMinutes} min</h3>
        </div>
      </div>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
    </div>
  );
};

export default Recipe;
