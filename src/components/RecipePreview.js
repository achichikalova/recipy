import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.scss";

const RecipePreview = ({ recipe }) => {
  console.log(recipe);
  return (
    <Link to={`/recipe/${recipe.id}`} className="preview">
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      {recipe.title && <h3>{recipe.title}</h3>}
    </Link>
  );
};

export default RecipePreview;
