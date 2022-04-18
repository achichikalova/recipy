import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Recipe.scss";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaUserTimes } from "react-icons/fa";
import { WiTime5 } from "react-icons/wi";

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const params = useParams();

  const getRecipeInfo = async (id) => {
    const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    await axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setRecipeInfo(res.data);
        setIngredients(res.data.extendedIngredients);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipeInfo(params.id);
  }, [params.id]);

  const ingredient = ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.original}</li>;
  });

  return (
    <div className="recipe-info-container">
      <h1>{recipeInfo?.title}</h1>
      <div className="recipe-meta">
        <div className="meta">
          <AiFillLike />
          <h3>{recipeInfo?.aggregateLikes}</h3>
        </div>
        <div className="meta">
          <FaUserTimes />
          <h3>{recipeInfo?.servings}</h3>
        </div>
        <div className="meta">
          <WiTime5 />
          <h3>{recipeInfo?.readyInMinutes} min</h3>
        </div>
      </div>
      <div className="recipe-info">
        <div className="image">
          <img src={recipeInfo?.image} alt={recipeInfo?.title} />
          <p>
            {recipeInfo?.title} By {recipeInfo?.sourceName}
          </p>
        </div>
        <div className="summary">
          <button>Summary</button>
          <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
        </div>
        <div className="ingredients">
          <button>Ingredients</button>
          <ul>{ingredient}</ul>
        </div>
        <div className="instructions">
          <button>Instructions</button>
          {recipeInfo.instructions}
        </div>

        <div className="directions">{/* <ul>{directions}</ul> */}</div>
      </div>
    </div>
  );
};

export default Recipe;
