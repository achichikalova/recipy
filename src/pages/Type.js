import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "../components/RecipePreview";
import "./Type.scss";

const Type = () => {
  const [recipes, setRecipes] = useState([]);

  let params = useParams();

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  const getRecipes = async (type) => {
    const checkType = localStorage.getItem(`${type}`);

    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${type}&number=9`;

    if (checkType) {
      setRecipes(JSON.parse(checkType));
    } else {
      await axios
        .get(URL)
        .then((res) => {
          localStorage.setItem(`${type}`, JSON.stringify(res.data.results));
          setRecipes(res.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const recipeType = recipes.map((recipe) => {
    return <RecipePreview key={recipe.id} recipe={recipe} />;
  });

  return <div className="recipe-type">{recipeType}</div>;
};

export default Type;
