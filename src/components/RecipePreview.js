import React from "react";
import "./RecipePreview.scss";

const RecipePreview = ({ recipe }) => {
  return (
    <div className="preview">
      {recipe.image && <img src={recipe.image} alt="recipe.title" />}
      {recipe.dishTypes && <h2>{recipe.dishTypes[0]}</h2>}
      {recipe.title && <h3>{recipe.title}</h3>}
      {recipe.sourceName && <p className="author">By {recipe.sourceName}</p>}
    </div>
  );
};

export default RecipePreview;
