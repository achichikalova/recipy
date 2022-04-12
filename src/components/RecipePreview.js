import React from "react";
import "./RecipePreview.scss";

const RecipePreview = ({ recipe }) => {
  return (
    <div className="preview">
      <img src={recipe?.image} alt="recipe.title" />
      <h2>{recipe?.dishTypes[0]}</h2>
      <h3>{recipe?.title}</h3>
      <p className="author">By {recipe?.sourceName}</p>
    </div>
  );
};

export default RecipePreview;
