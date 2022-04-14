import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.scss";

const RecipePreview = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="preview">
      {recipe.image && <img src={recipe.image} alt="recipe.title" />}
      {recipe.dishTypes && <h2>{recipe.dishTypes[0]}</h2>}
      {recipe.title && <h3>{recipe.title}</h3>}
      {recipe.sourceName && <p className="author">By {recipe.sourceName}</p>}
    </Link>
  );
};

export default RecipePreview;
